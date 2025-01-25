import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

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
    
    &:hover {
        background-color: ${({ theme }) => theme.blue_hover};
        border: 1px solid ${({ theme }) => theme.white};
    }
`

const ButtonDelete = ({ buttonClick }) => {

    return (
        <>
            <Button onClick={() => buttonClick()}>
                <MdDeleteOutline
                    size='28px'
                    color='#fff'
                />
            </Button>
        </>
    )
}

export default ButtonDelete;