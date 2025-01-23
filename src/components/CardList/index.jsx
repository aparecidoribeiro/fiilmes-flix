import CardFilme from "../../components/CardFilme";
import styled from "styled-components";
import { Link } from "react-router-dom";

//https://api.themoviedb.org/3/movie/now_playing?api_key=55a35acc318048587ff967a5a6a30639&language=pt-BR

//https://api.themoviedb.org /3/tendências/tudo/semana?api_key=55a35acc318048587ff967a5a6a30639&language=pt-BR

const Section = styled.section`
    padding: 0 20px;
`

const Div = styled.div`
    margin-top: 20px;
    max-width: 100%;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-flow: column;
    overflow-x: auto;
    margin-bottom: 10px;
`

const Text = styled.h2`
    font-size: 34px;
`

const LinkDom = styled(Link)`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    padding: 8px 14px;
    border-radius: 4px;
    font-weight: 100;
    display: flex;
    align-items: center;
    transition: all .3s;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        background-color: ${({ theme }) => theme.blue_hover};
    }
`

const DivInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const CardList = ({ value, title, to }) => {

    function verFilmes(e) {
        console.log(e)
    }

    return (
        <Section>
            <DivInfo>
                <Text>{title}</Text>
                <LinkDom to={`/filmes/${to}`} onClick={(e) => verFilmes(e)} >Ver mais</LinkDom>
            </DivInfo>
            <Div>
                {value.map((filme) => {
                    return (
                        <CardFilme
                            key={filme.id}
                            title={filme.title}
                            image={filme.poster_path}
                            id={filme.id}
                        />
                    )
                })}
            </Div>
        </Section>
    )
}

export default CardList