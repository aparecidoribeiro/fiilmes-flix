import { styled } from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
    height: 100%;
    width: 100%;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    color: #292929;
    font-size: 20px;

    &::placeholder {
        font-size: 20px;
        font-style: italic;
        color: #292929;
    }

    &:focus {
        outline: 3px solid #2b5af7;
    }

    @media (max-width: 800px) {
        width: 100%;
        border-radius: 0;
        border: 1px solid #292929;

        
        &:focus {
            outline:0;
        }

    }
`


const Div = styled.div`
    height: 40px;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        position: absolute;
        top: 70px;
        z-index: 9;
        max-width: 100vw;
    }

`

const IconSeach = styled(FaSearch)`
    position: relative;
    right: 30px;

    @media (max-width: 800px) {
        position: absolute;
    }
`

//https://api.themoviedb.org/3/search/movie?api_key=55a35acc318048587ff967a5a6a30639&query=sonic&language=pt-BR

const Search = () => {

    const [search, setSearch] = useState()
    const navigation = useNavigate()


    const clickEnter = (e) => {
        if (e.key == "Enter") {
            navigation(`/filmes/${search}`, { replace: true })
            setSearch("")
        }

    }

    return (
        <Div>
            <Input
                placeholder='Buscar por um Filme'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={clickEnter}
            />
            <IconSeach />
        </Div>
    )
}

export default Search;