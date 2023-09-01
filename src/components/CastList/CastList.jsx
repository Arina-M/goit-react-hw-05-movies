import CastListItem from 'components/CastListItem/CastListItem';
import { CastGallery } from './CastList.styled';
import PropTypes from 'prop-types';

export default function CastList({ arrayOfCast }) {
  return (
    <CastGallery>
      {arrayOfCast.map(({ id, character, name, poster }) => {
        return (
          <CastListItem
            key={id}
            character={character}
            name={name}
            poster={poster}
          />
        );
      })}
    </CastGallery>
  );
}

CastList.propTypes = {
  arrayOfCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
