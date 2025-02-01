import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../Search";
import { useContext } from "react";
import { FilmesContext } from "../../contexts/FilmesContext";


const Container = styled.header`
    width: 100%;
    height: 90px;
    background: ${({ theme }) => theme.blue};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 9;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3); 

`

const Logo = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 35px;
    text-transform: uppercase;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 25px;
    color: ${({ theme }) => theme.white} ;
    font-weight: bold;
`

export const LinkDom = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${(props) => props.gap};
    width: auto;
`

const Div = styled.div`
    background-color: ${({ theme }) => theme.orange};
    color: black;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    position: absolute;
    margin-left: 10px;
    margin-bottom: 15px;
    font-family: sans-serif;
    font-size: 12px;
`


const Header = () => {

    const { filmes } = useContext(FilmesContext)

    return (
        <Container>
            <Link to='/'>
                <Logo>Filmes Flix</Logo>
            </Link>
            <Search />
            <LinkDom to='/favoritos' gap="5px">
                <Div>{filmes.length}</Div>
                <FaBookmark
                    color="#fff"
                    size="22px"
                />
                <Text>Favoritos</Text>
            </LinkDom>
        </Container>
    )
}

export default Header;