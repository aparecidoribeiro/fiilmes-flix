import CardList from "../../components/CardList";
import { useEffect, useState } from "react";
import api from "../../services/api";
import LoadingLop from "../../components/LoadingLop";
import styled from "styled-components";


const Div = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Home = () => {

    const [loading, setLoading] = useState(true)

    //Estado de filmes
    const [cartazes, setCartazes] = useState([])
    const [populares, setPoplares] = useState([])
    const [classificados, setClassificados] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const filmesCartazes = await api.get('movie/now_playing', {
                params: {
                    api_key: '55a35acc318048587ff967a5a6a30639',
                    language: 'pt-BR',
                    page: 1
                }
            })
            const filmesPopulares = await api.get('movie/popular', {
                params: {
                    api_key: '55a35acc318048587ff967a5a6a30639',
                    language: 'pt-BR',
                    page: 2
                }
            })
            const filmesClassificados = await api.get('movie/top_rated', {
                params: {
                    api_key: '55a35acc318048587ff967a5a6a30639',
                    language: 'pt-BR',
                    page: 1
                }
            })
            setCartazes(filmesCartazes.data.results.slice(0, 9))
            setPoplares(filmesPopulares.data.results.slice(0, 9))
            setClassificados(filmesClassificados.data.results.slice(0, 9))

            setLoading(false)

        }

        loadFilmes()

    }, [])

    if (loading) {
        return <LoadingLop />
    }

    return (
        <Div>
            <CardList
                value={cartazes}
                title={"Filmes em Cartazes"}
                to={"now_playing"}
            />
            <CardList
                value={populares}
                title={"Filmes Populares"}
                to={"popular"}
            />
            <CardList
                value={classificados}
                title={"Top Classficados"}
                to={"top_rated"}
            />
        </Div>
    )
}
export default Home;