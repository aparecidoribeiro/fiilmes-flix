import { Link } from "react-router-dom";
import styled from "styled-components";


const Card = styled(Link)`
    width: 150px;
    height: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover>h3  {
        color: ${({ theme }) => theme.blue};
    }
`

const Image = styled.img`
    background-color: ${({ theme }) => theme.blue};
    height: 225px;
    width: 150px;
    border-radius: 8px;
    object-fit: cover;
`

const Text = styled.h3`
    font-size: 19px;
    color: ${({ theme }) => theme.black};
    font-weight: 100;
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 10px;
    font-weight: bold;
    transition: all .3s;
`

const CardFilme = ({ image, title, id }) => {
    return (
        <Card to={`/filme/${id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${image}`} />
            <Text>{title}</Text>
        </Card>
    )
}

export default CardFilme;