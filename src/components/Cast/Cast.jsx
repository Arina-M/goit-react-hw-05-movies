import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovieCast';
import { Container } from 'components/Container/Container.styled';
import { ThreeDots } from 'react-loader-spinner';
import CastList from 'components/CastList/CastList';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getCastData() {
      try {
        const castDataForList = [];
        const response = await getMovieCast(movieId);
        response.map(({ id, character, name, profile_path }) => {
          const oneCastData = { id, character, name, poster: profile_path };
          return castDataForList.push(oneCastData);
        });
        setCast(castDataForList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCastData();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <ThreeDots color="#3f51b5" />}
      {error && <h2>Data processing error. Try reloading the page.</h2>}
      {cast.length > 0 ? (
        <CastList arrayOfCast={cast} />
      ) : (
        <p>There is no cast information for this movie</p>
      )}
    </Container>
  );
}
