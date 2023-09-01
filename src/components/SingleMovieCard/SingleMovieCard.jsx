import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container.styled';
import LolPicture from '../../data/images/lol.png';
import ReturnButton from 'components/ReturnButton/ReturnButton';
import {
  MovieCardWrapper,
  MovieCardPoster,
  MovieCardInfo,
  MovieCardTitle,
  MovieCardLink,
  MovieCardBudget,
  MovieCardGenres,
  MovieCardRating,
  MovieLinksBlock,
  MovieLink,
  MovieLinksText,
} from './SingleMovieCard.styled';
import { useLocation } from 'react-router-dom';

export default function SingleMovieCard({ movieInfo }) {
  const location = useLocation();
  const { title, genres, budget, homepage, poster, description, rating } =
    movieInfo;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Container>
      <ReturnButton linkBack={backLinkHref} />
      <MovieCardWrapper>
        <MovieCardPoster
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture
          }
          alt={title}
          width="360"
        />
        <MovieCardInfo>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardRating>Rating: {rating.toFixed(1)}</MovieCardRating>
          <MovieCardLink>
            <p>Official website:</p>
            <a href={homepage}>{homepage}</a>
          </MovieCardLink>
          <MovieCardBudget>Budget: {budget}</MovieCardBudget>
          <MovieCardGenres>
            <p>Genres:</p>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </MovieCardGenres>
          <b>Overview</b>
          <p>{description}</p>
          <MovieLinksBlock>
            <MovieLinksText>Additional Information</MovieLinksText>
            <MovieLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </MovieLink>
            <MovieLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </MovieLink>
          </MovieLinksBlock>
        </MovieCardInfo>
      </MovieCardWrapper>
    </Container>
  );
}

SingleMovieCard.propTypes = {
  movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.shape),
      budget: PropTypes.number,
      homepage: PropTypes.string,
      poster: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
    })
  ).isRequired,
};
