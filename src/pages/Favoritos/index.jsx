import styled from "styled-components";
import CardFavorito from "../../components/CardFavorito";
import { useContext, useEffect } from "react";
import { FilmesContext } from "../../contexts/FilmesContext";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;
    gap: 25px;
`

const Section = styled.section`
    padding: 30px 20px 20px;
    display: ${(props) => props.$grid ? "grid" : "flex"};
    
    //Flex
    width: 100%;
    justify-content: center;
    bottom: 100px; 
    /* align-items: ${(props) => props.$grid ? "" : "center"};  */
    margin-top: ${(props) => props.$grid ? "" : "200px"}; 
    height: calc(100dvh - 90px);

    //Grid
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    justify-items: center;
`

const Text = styled.p`
    font-size: 20px;
`

const Favoritos = () => {

    const { filmes, setFilmes } = useContext(FilmesContext)

    useEffect(() => {
        console.log(filmes)
    }, [filmes])

    if (filmes.length == 0) {
        return (
            <Section>
                <Text>Nenhum filme encontrado :(</Text>
            </Section>
        )
    }
    return (
        <Container>
            {filmes.map((filme) => {
                return (
                    <CardFavorito
                        key={filme.id}
                        title={filme.title}
                        image={filme.backdrop_path}
                        sinopse={filme.overview}
                        id={filme.id}
                    />
                )
            })}
        </Container>
    )
}

export default Favoritos;