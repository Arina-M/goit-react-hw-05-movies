import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/getTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from 'components/Container/Container.styled';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function getMoviesData() {
      try {
        const movieDataForList = [];
        const response = await getTrendingMovies();
        const moviesInfo = response.data.results;
        moviesInfo.map(
          ({ id, original_title, poster_path, vote_average, name }) => {
            const movie = {
              id,
              name,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
            };
            return movieDataForList.push(movie);
          }
        );

        setMovies(movieDataForList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesData();
  }, []);

  return (
    <Container>
      {isLoading && <ThreeDots color="#3f51b5" />}
      {error && <h2>Data processing error. Try reloading the page.</h2>}
      {movies && <MoviesList movies={movies} />}
    </Container>
  );
}
