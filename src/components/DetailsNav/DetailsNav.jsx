import { Additional, DetailsItem, DetailsList, LinkCast } from "./DetailsNav.styled";


const DetailsNav = () => {
    return (
        <div>
            <Additional>Additional Information</Additional>
            <DetailsList>
                <DetailsItem>
                    <LinkCast to='cast'>Cast</LinkCast>
                </DetailsItem>
                <DetailsItem>
                    <LinkCast to='reviews'>Reviews</LinkCast>
                </DetailsItem>
            </DetailsList>
        </div>
    )
}

export default DetailsNav;