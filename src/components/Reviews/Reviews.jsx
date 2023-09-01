import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovieReviews';
import { Container } from 'components/Container/Container.styled';
import { ThreeDots } from 'react-loader-spinner';
import ReviewsList from 'components/ReviewsList/ReviewsList';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function getReviewsData() {
      try {
        const reviewsDataForList = [];
        const response = await getMovieReviews(movieId);
        response.map(({ id, author, content }) => {
          const oneReviewData = { id, author, content };
          return reviewsDataForList.push(oneReviewData);
        });
        setReviews(reviewsDataForList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getReviewsData();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <ThreeDots color="#3f51b5" />}
      {error && <h2>Data processing error. Try reloading the page.</h2>}
      {reviews.length > 0 ? (
        <ReviewsList arrayOfReviews={reviews} />
      ) : (
        <p>There is no reviews on this movie</p>
      )}
    </Container>
  );
}
