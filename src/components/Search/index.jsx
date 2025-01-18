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

    &::placeholder {
        font-size: 14px;
        font-style: italic;
        color: #292929;
    }

    &:focus {
        outline: 3px solid #2b5af7;
    }
`


const Div = styled.div`
    height: 34px;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconSeach = styled(FaSearch)`
    position: relative;
    right: 30px;
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
                placeholder='Buscar por um Filme ou Série'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={clickEnter}
            />
            <IconSeach />
        </Div>
    )
}

export default Search;