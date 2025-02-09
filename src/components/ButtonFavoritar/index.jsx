import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { useContext } from "react";
import { FilmesContext } from "../../contexts/FilmesContext";
import { toast } from "react-toastify";


const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.blue};
    transition: all .3s;
    
    &:hover {
        background-color: ${({ theme }) => theme.blue_hover};
    }
`


const ButtonFavoritar = ({ filme }) => {

    const { filmes, setFilmes } = useContext(FilmesContext)

    function favoritarFilme() {

        if (verificarFavoriacao(filme, filmes)) {
            toast.warn("Esse filme já foi favoritado")
        } else {
            setFilmes([...filmes, filme])
            toast.success("Filme adicionado ao favoritos")
        }

    }


    function verificarFavoriacao(filme, filmes) {
        const hasFilme = filmes.some((item) => item.id == filme.id)

        if (hasFilme) {
            return true
        } else {
            return false
        }


    }


    return (
        <>
            <Button onClick={() => {
                favoritarFilme()
            }}>
                <MdFavorite
                    size='18px'
                    color='#fff'
                />
            </Button>
        </>
    )
}

export default ButtonFavoritar;