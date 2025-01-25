import styled from "styled-components";
import { MdFavorite } from "react-icons/md";


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

    const minhaLisa = localStorage.getItem('@favoritos')
    let filmesFavoritados = JSON.parse(minhaLisa) || []

    function favoritarFilme() {

        if (verificarFavoriacao(filme, filmesFavoritados)) {
            console.log("Esse filme já esá na sua lista")
        } else {
            filmesFavoritados.push(filme)
            localStorage.setItem('@favoritos', JSON.stringify(filmesFavoritados))
            console.log("Filme a adicionado a sua lista")
        }

    }


    function verificarFavoriacao(filme, filmesFavoritados) {
        const hasFilme = filmesFavoritados.some((item) => item.id == filme.id)

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