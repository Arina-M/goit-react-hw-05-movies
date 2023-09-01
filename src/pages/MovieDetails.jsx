import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/getMovieDetails';
import SingleMovieCard from 'components/SingleMovieCard/SingleMovieCard';
import { Container } from 'components/Container/Container.styled';
import { ThreeDots } from 'react-loader-spinner';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getDetailsData() {
      try {
        const response = await getMovieDetails(movieId);

        const {
          budget,
          genres,
          homepage,
          original_title,
          overview,
          poster_path,
          vote_average,
        } = response.data;

        const movieData = {
          title: original_title,
          genres: genres,
          budget: budget,
          homepage: homepage,
          poster: poster_path,
          description: overview,
          rating: vote_average,
        };
        setMovieData(movieData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getDetailsData();
  }, [movieId]);
  return (
    <Container>
      {isLoading && <ThreeDots color="#3f51b5" />}
      {error && <h2>Data processing error. Try reloading the page.</h2>}
      {movieData && <SingleMovieCard movieInfo={movieData} />}
      <Outlet />
    </Container>
  );
}
