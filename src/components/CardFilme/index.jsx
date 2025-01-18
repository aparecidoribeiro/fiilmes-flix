import styled from "styled-components";


const Card = styled.div`
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
    height: 225px;
    width: 150px;
    border-radius: 8px;
    object-fit: cover;
`

const Text = styled.h3`
    font-size: 16px;
    color: ${({ theme }) => theme.black};
    font-weight: 100;
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 10px;
    font-weight: bold;
    transition: all .2s;
`

const CardFilme = ({ image, title, data }) => {
    return (
        <Card>
            <Image src={`https://image.tmdb.org/t/p/original/${image}`} />
            <Text>{title}</Text>
            <Text>{data}</Text>
        </Card>
    )
}

export default CardFilme;