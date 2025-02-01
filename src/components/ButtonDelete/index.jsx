import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { FilmesContext } from "../../contexts/FilmesContext";
import { toast } from "react-toastify";

const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.orange};
    transition: all .3s;
    z-index: 8;
    position: relative;
    
    &:hover {
        background-color: ${({ theme }) => theme.blue_hover};
        border: 1px solid ${({ theme }) => theme.white};
    }
`

const ButtonDelete = ({ id: filmeClicado }) => {

    const { filmes, setFilmes } = useContext(FilmesContext)

    function deletarFilme() {
        const hasFilmes = filmes.filter((item) => {
            return (item.id !== filmeClicado)
        })

        setFilmes(hasFilmes)
        toast.success("Filme deletado com sucesso")
    }


    return (
        <>
            <Button onClick={() => deletarFilme()}>
                <MdDeleteOutline
                    size='28px'
                    color='#fff'
                />
            </Button>
        </>
    )
}

export default ButtonDelete;