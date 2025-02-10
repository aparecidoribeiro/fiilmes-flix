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


    @media (max-width: 750px) {
        width: 125px;
        height: auto;
    }

`

const Image = styled.img`
    background-color: ${({ theme }) => theme.blue};
    height: 225px;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 7px;


    @media (max-width: 750px) {
        height: 190px;
    }
`

const Text = styled.h3`
    font-size: 19px;
    color: ${({ theme }) => theme.black};
    text-align: start;
    width: 100%;
    height: auto;
    padding: 0 10px;
    font-weight: ${(props) => props.weight || "bold"};
    transition: all .3s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 750px) {
        font-size: 16px;
        padding: 0 5px;

    }
`

const CardFilme = ({ image, title, id, date }) => {

    const dataFilme = new Date(date)
    const formatoData = dataFilme.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })

    return (
        <Card to={`/filme/${id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${image}`} />
            <Text>{title} </Text>
            <Text
                as="p"
                weight="400"
            >{formatoData ? formatoData : date}
            </Text>
        </Card>
    )
}

export default CardFilme;