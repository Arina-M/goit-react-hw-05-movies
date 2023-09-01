import { MovieHeader, HeaderNav, StyledLink } from './Header.styled';
import { Container } from 'components/Container/Container.styled';

export default function Header() {
  return (
    <MovieHeader>
      <Container>
        <HeaderNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderNav>
      </Container>
    </MovieHeader>
  );
}
