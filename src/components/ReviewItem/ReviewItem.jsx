import PropTypes from 'prop-types';
import { ReviewAuthor, ReviewBox } from './ReviewItem.styled';

export default function ReviewItem({ author, content }) {
  return (
    <ReviewBox>
      <ReviewAuthor>{author}</ReviewAuthor>
      <p>{content}</p>
    </ReviewBox>
  );
}

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
