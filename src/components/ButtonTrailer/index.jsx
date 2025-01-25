import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Button = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 20px;
    font-weight: 600;
    gap: 3px;
    margin-left: 10px;
`

const ButtonTrailer = () => {
    return (
        <Button>
            <IoIosPlay
                size='28px'
            />
            Reproduzir trailer
        </Button>
    )
}

export default ButtonTrailer;