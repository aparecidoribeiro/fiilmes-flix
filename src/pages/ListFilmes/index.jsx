import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import api from "../../services/api"
import LoadingLop from "../../components/LoadingLop"
import CardFilme from '../../components/CardFilme'

const Section = styled.section`
    padding: 0 20px 20px;
    display: ${(props) => props.grid ? "grid" : "flex"};
    
    //Flex
    width: 100%;
    justify-content: center;
    bottom: 100px; 
    position: ${(props) => props.grid ? "" : "absolute"};
    align-items: ${(props) => props.grid ? "" : "center"};
    height: ${(props) => props.grid ? "auto" : "calc(100vh - 155px)"} ;

    //Grid
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    justify-items: center;
`

const Text = styled.p`
    font-size: 20px;
`

const ListFilmes = () => {

    const { nome } = useParams()

    const [loading, setLoading] = useState(true)
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function searchFilme() {
            await api.get('/search/movie', {
                params: {
                    api_key: '55a35acc318048587ff967a5a6a30639',
                    query: nome,
                    language: 'pt-BR',
                    page: 1
                }
            })
                .then((response) => {
                    console.log(response.data.results)
                    if (response.data.results.length > 0) {
                        setFilmes(response.data.results)
                        setLoading(false)
                    } else {
                        setLoading(false)
                        setFilmes([])
                        console.log("Nenhum filmes encontrado")
                        return
                    }
                })
                .catch(() => {
                    console.log("erro")
                    return
                })


        }

        searchFilme()

    }, [nome])

    if (loading) {
        return <LoadingLop />
    } else if (filmes.length == 0) {
        return (
            <Section>
                <Text>Nenhum filme encontrado :(</Text>
            </Section>
        )
    }

    return (
        <Section grid>
            {filmes.map((filme) => {
                return (
                    <CardFilme
                        key={filme.id}
                        title={filme.title}
                        image={filme.poster_path}
                    />
                )
            })}
        </Section>
    )
}

export default ListFilmes;