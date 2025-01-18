import { styled } from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import api from '../../services/api';
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
        async function searchFilme() {
            await api.get('/search/movie', {
                params: {
                    api_key: '55a35acc318048587ff967a5a6a30639',
                    query: search,
                    language: 'pt-BR',
                    page: 1
                }
            }).then((response) => {
                if (response.data.results.length <= 0) {
                    console.log("Nenhum filme encontrado")
                    setSearch("")
                }

                console.log(response.data.results)
                navigation('/teste', { replace: true })

            }).catch(() => {
                console.log("Nenhum filme encontrado")
                return
            })
        }

        if (e.key == "Enter") {
            searchFilme()
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