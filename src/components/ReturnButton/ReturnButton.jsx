import PropTypes from 'prop-types';
import { OnReturnBtn } from './ReturnButton.styled';

export default function ReturnButton({ linkBack }) {
  return <OnReturnBtn to={linkBack}> ◄ Back </OnReturnBtn>;
}

ReturnButton.propTypes = {
  linkBack: PropTypes.string.isRequired,
};
