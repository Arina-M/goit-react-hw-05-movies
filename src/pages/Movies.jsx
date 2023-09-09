import { Container } from 'components/Container/Container.styled';
import SearchBox from 'components/SearchBox/SearchBox';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { getSearchMovies } from 'api/getSearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { ThreeDots } from 'react-loader-spinner';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foundMovies, setFoundMovies] = useState([]);
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();


  const navigate = useNavigate();

  const changeUrlParams = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    async function getSearchMoviesData() {
      try {
        const searchMoviesDataForList = [];
        const response = await getSearchMovies(searchQuery);
        if (response.length === 0) {
          toast.error('No movies for your request', {
            icon: '👻',
          });
          setSearchParams(prevSearchParams => (prevSearchParams = {}));
          setFoundMovies(prevFoundMovies => (prevFoundMovies = []));
          navigate('/');
          return;
        }
        response.map(
          ({ id, original_title, poster_path, vote_average, name }) => {
            const movie = {
              id,
              name,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
            };
            return searchMoviesDataForList.push(movie);
          }
        );

        setFoundMovies(searchMoviesDataForList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMoviesData();
  }, [searchQuery, setSearchParams, navigate]);

  return (
    <Container>
      <SearchBox onUrlChange={changeUrlParams} />
      {isLoading && <ThreeDots color="#3f51b5" />}
      {error && <h2>Data processing error. Try reloading the page.</h2>}
      {foundMovies.length > 0 && (
        <MoviesList movies={foundMovies} state={{ from: location }} />
      )}
    </Container>
  );
}