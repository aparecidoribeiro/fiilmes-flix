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
    height: calc(100dvh - 105px);
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 60px 40px;
    gap: 30px;
`

const DivContainer = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 22px;
        font-weight: 500;
    }
`

const Img = styled.img`
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
`

const Text = styled.h2`
    font-size: ${({ size }) => size};
`

const Nota = styled.span`
    font-size: 30px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.orange};
    color: ${({ theme }) => theme.white};
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 8px;
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
            <Img src={filme.poster_path ? `https://image.tmdb.org/t/p/original/${filme.poster_path}` : `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
            <DivContainer $flex='3'>
                <div>
                    <Text size="50px">{filme.title}</Text>
                    <Div>
                        <Text as='span'>{formatoData}</Text>
                        <Text as='span'>{filme.runtime}m</Text>
                        {filme.genres.map((item) => <Text as='span' key={item.name}>{item.name}</Text>)}
                    </Div>
                </div>
                <Div>
                    <ButtonFavoritar filme={filme} />
                    <ButtonTrailer />
                </Div>
                <div>
                    <Text as={"h3"} size="32px">{filme.overview ? "Sinopse" : ""}</Text>
                    <Text as={"p"} size="24px">{filme.overview}</Text>
                </div>
                <Nota >{(filme.vote_average).toFixed(1)}/10</Nota>
            </DivContainer>
        </Container>
    )
}

export default Filme;