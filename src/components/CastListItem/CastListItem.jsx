import LolPicture from '../../data/images/lol.png';
import PropTypes from 'prop-types';
import {
  ActorCard,
  ActorInfo,
  ActorName,
  ActorCharacter,
  ActorPhoto,
} from './CastListItem.styled';

export default function CastListItem({ character, name, poster }) {
  return (
    <ActorCard>
      <ActorPhoto
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture}
        alt={name}
        width="250"
      />
      <ActorInfo>
        <ActorName>{name}</ActorName>
        <ActorCharacter>{character}</ActorCharacter>
      </ActorInfo>
    </ActorCard>
  );
}

CastListItem.propTypes = {
  character: PropTypes.string,
  name: PropTypes.string,
  poster: PropTypes.string,
};
