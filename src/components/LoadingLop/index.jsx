import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const Div = styled.div`
    width: 100%;
    height: calc(100vh - 105px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 80px;
    gap: 20px;
`

const Text = styled.p`
    font-size: 26px;
`
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to  {
        transform: rotate(360deg);
    }
`

const Cicle = styled(FaSpinner)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.blue};
    font-size: 28px;
`


const LoadingLop = () => {
    return (
        <Div>
            <Text>Carregando filmes</Text>
            <Cicle />
        </Div>
    )
}

export default LoadingLop;