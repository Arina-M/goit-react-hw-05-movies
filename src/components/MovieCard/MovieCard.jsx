import PropTypes from 'prop-types';
import LolPicture from '../../data/images/lol.png';
import {
  MovieCardLink,
  MovieCardItem,
  MovieCardInfo,
  MovieCardImage,
  MovieImageWrapper,
} from './MovieCard.styled';

export default function MovieCard({
  id,
  name,
  title,
  poster,
  // voteAverage,
  state,
}) {
  return (
    <MovieCardItem>
      <MovieCardLink to={`/movies/${id}`} state={state}>
        <MovieImageWrapper>
          <MovieCardImage
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture
            }
            alt={title || name}
            width="295"
          />
        </MovieImageWrapper>

        <MovieCardInfo>
          {title ? <h3>{title}</h3> : <h3>{name}</h3>}
          {/* <p>{voteAverage}</p> */}
        </MovieCardInfo>
      </MovieCardLink>
    </MovieCardItem>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  voteAverage: PropTypes.number,
  state: PropTypes.string,
};
