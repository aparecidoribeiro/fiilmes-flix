import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingLop from "../../components/LoadingLop";
import api from "../../services/api";
import ButtonFavoritar from "../../components/ButtonFavoritar";
import ButtonTrailer from "../../components/ButtonTrailer";
import { toast } from "react-toastify";

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    padding: 60px 4.5vw;

`

const DivContainer = styled.div`
    max-width: 850px;
    gap: 10px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 130px 50px 1fr;

    h2 {
        line-height: 40px;
    }


    @media (max-width: 1024px) {

        h2 {
            font-size: 38px;
            line-height: 30px;

        }

        h3 {
            font-size: 28px;
        }

        p {
            font-size: 22px;
        }
    }

    @media (max-width: 800px) {


        h2 {
            font-size: 36px;
        }

        h3 {
            font-size: 24px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (max-width: 550px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 230px .5fr 2fr;
        gap: 15px;
    }

    @media (max-width: 350px) {
        h2 {
            font-size: 28px;
        }

    }

`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        margin-top: 5px;
        line-height: 8px;
    }

    @media (max-width: 700px) {
    }

    span {
        font-size: 22px;
        font-weight: 500;
        line-height: 15px;

        @media (max-width: 800px) {
            font-size: 18px;
        }
    }

    @media (max-width: 550px) {
        grid-column: 1/3;
        grid-row: 2;
    }


`

const Img = styled.img`
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
    grid-column: 1/2;
    grid-row: 1/3;
    margin-right: 20px;

    @media (max-width: 1024px) {
        width: 250px;
        height: 380px;
    }

    @media (max-width: 800px) {
        width: 220px;
        height: 340px;
    }

    @media (max-width: 550px) {
        width: 130px;
        height: 200px;
        grid-column: 2/3;
        grid-row: 1;
    }

`

const Text = styled.h2`
    font-size: ${({ size }) => size};
`

const Nota = styled.span`
    font-size: 26px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.orange};
    color: ${({ theme }) => theme.white};
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 6px;
    border-radius: 8px;

    @media (max-width: 1024px)  {
        width: 70px;
        font-size: 25px;
    }

    @media (max-width: 800px) {
        width: 50px;
        font-size: 18px;
    }
    
    @media (max-width: 700px) {
        order: 2;
    }


`

const DivSinopse = styled.div`
    grid-column: 2/3;
    grid-row: 3;

    @media (max-width: 550px) {
        grid-column: 1/3;
        grid-row: 3;
    }
`

const DivInfor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 550px) {
        grid-column: 1/2;
        grid-row: 1;
    }
`

const DivAction = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    grid-column: 2/3;
        grid-row: 2;

    @media (max-width: 550px) {
        grid-column: 1/3;
        grid-row: 2;
    }
`

const Filme = () => {

    const { id } = useParams()
    const navigation = useNavigate()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    async function loadFilmes() {
        await api.get(`movie/${id}`, {
            params: {
                api_key: '55a35acc318048587ff967a5a6a30639',
                language: 'pt-BR',
                page: 1
            }
        }).then((response) => {
            console.log(response.data)
            setFilme(response.data)
            setLoading(false)
        }).catch((e) => {
            toast.warn("Erro ao procurar filme")
            console.log(e)
            navigation('/', { replace: true })
            return
        })
    }

    useEffect(() => {
        loadFilmes()
    }, [id])


    if (loading) {
        return <LoadingLop />
    }

    const dataFilme = new Date(filme.release_date)
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const formatoData = dataFilme.toLocaleDateString('pt-BR', options)

    return (

        <Container>
            <DivContainer $flex='3'>
                <Img src={filme.poster_path ? `https://image.tmdb.org/t/p/original/${filme.poster_path}` : `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
                <DivInfor>
                    <Text size="50px">{filme.title}</Text>
                    <Div>
                        <Text as='span'>{formatoData}</Text>
                        <Text as='span'>{filme.runtime}m</Text>
                        {filme.genres.map((item) => <Text as='span' key={item.name}>{item.name}</Text>)}
                    </Div>
                    <Nota >{(filme.vote_average).toFixed(1)}/10</Nota>
                </DivInfor>
                <DivAction>
                    <ButtonFavoritar filme={filme} />
                    <ButtonTrailer filme={filme.title} />
                </DivAction>
                <DivSinopse>
                    <Text as={"h3"} size="32px">{filme.overview ? "Sinopse" : ""}</Text>
                    <Text as={"p"} size="24px">{filme.overview}</Text>
                </DivSinopse>

            </DivContainer>
        </Container>
    )
}

export default Filme;