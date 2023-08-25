import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
import { BoxNav, Container, Header, LinkButton } from "./SharedLayout.styled";


const SharedLayout = () => {
    return(
        <Container>
            <Header>
                <BoxNav>
                    <li>
                        <Link to="/">
                            <LinkButton type="button">
                                Home
                            </LinkButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <LinkButton type="button">
                                Movies
                            </LinkButton>
                        </Link>
                    </li>
                </BoxNav>
            </Header>
            <Container>
                <div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </Container>
        </Container>
    );
}

export default SharedLayout;