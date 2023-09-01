import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import { MovieList } from './MoviesList.styled';

export default function MoviesList({ movies, state }) {
  return (
    <MovieList>
      {movies.map(({ id, title, poster, voteAverage, name }) => (
        <MovieCard
          key={id}
          id={id}
          name={name}
          title={title}
          poster={poster}
          voteAverage={voteAverage}
          state={state}
        />
      ))}
    </MovieList>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  state: PropTypes.string,
};
