import styled from "styled-components";
import ButtonDelete from "../ButtonDelete";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
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
`

const Image = styled.img`
    width: 100px;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    transition: all .2s;
`

const Div = styled.div`
    display: flex;
    gap: 10px;
`

const Text = styled.h2`
    font-size: ${(props) => props.size};
    max-width: 350px;
`
const Button = styled(Link)`
    color: ${({ theme }) => theme.white};
    margin-left: 5px;
    font-weight: 500;

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
                    <Text size='35px'>{title.substring(0, 25)}...</Text>
                    <Text
                        as={'p'}
                        size='18px'
                    >{sinopse.substring(0, 200)}...
                        <Button to={`/filme/${id}`}>Ver mais</Button>
                    </Text>
                </div>
                <ButtonDelete id={id} />
            </Div>
        </Container>
    )
}

export default CardFavorito;