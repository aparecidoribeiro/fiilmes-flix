import styled from "styled-components";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "../Search";


const Container = styled.header`
    width: 100%;
    height: 75px;
    background: ${({ theme }) => theme.blue};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;

`

const Logo = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.white} ;
`

export const LinkDom = styled(Link)`
    display: flex;
    align-items: center;
`


const Header = () => {
    return (
        <Container>
            <Link to='/'>
                <Logo>Filmes Flix</Logo>
            </Link>
            <Search />
            <LinkDom to='/favoritos'>
                <MdBookmarkBorder
                    color="#fff"
                    size="23px"
                />
                <Text>Favoritos</Text>
            </LinkDom>
        </Container>
    )
}

export default Header;