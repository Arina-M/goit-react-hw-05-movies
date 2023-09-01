import PropTypes from 'prop-types';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import { ReviewGallery } from './ReviewsList.styled';

export default function ReviewsList({ arrayOfReviews }) {
  return (
    <ReviewGallery>
      {arrayOfReviews.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id} author={author} content={content}></ReviewItem>
        );
      })}
    </ReviewGallery>
  );
}

ReviewsList.propTypes = {
  arrayOfReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
