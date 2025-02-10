import styled from "styled-components";
import ButtonDelete from "../ButtonDelete";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: auto;
    max-width: 600px;
    height: 180px;
    border-radius: 8px;
    /* border: 1px solid rgba(0, 0, 0, .5); */
    background-color: ${({ theme }) => theme.blue};
    padding: 15px 20px;
    display: flex;
    gap: 30px;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    justify-content: center;
    z-index: 1;


    @media (max-width: 600px) {
        gap: 10px;
        padding: 10px 20px;

    }

    @media (max-width: 450px) {
        height: 120px;
    }

`

const Image = styled.img`
    width: 100px;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    transition: all .2s;

    @media (max-width: 450px) {
        width: 70px;
        height: 100%;
    }
`

const Div = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 600px) {

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 15px;
            max-width: 250px;
        }
    }

    @media (max-width: 450px) {
        h2 {
            font-size: 22px;
        }

        p {
            display: none;
        }
    }

`

const Text = styled.h2`
    font-size: ${(props) => props.size};
    max-width: 320px;
`
const Button = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }
`

const CardFavorito = ({ title, image, sinopse, id }) => {

    return (
        <Container>
            <Image
                src={`https://image.tmdb.org/t/p/original/${image}`}
            />
            <Div>
                <div>
                    <Text size='35px'>{title}</Text>
                    <Text
                        as={'p'}
                        size='18px'
                    >{sinopse.substring(0, 160)}...
                    </Text>
                    <Button to={`/filme/${id}`}>Ver mais</Button>
                </div>
                <ButtonDelete id={id} />
            </Div>
        </Container>
    )
}

export default CardFavorito;