import styled, { keyframes } from "styled-components";

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

const Cicle = styled.div`
    width: 34px;
    height: 34px;
    background-color: transparent;
    border-radius: 50%;
    border: ${({ theme }) => "5px solid" + theme.blue};
    border-top: 5px solid transparent;
    animation: ${rotate} 1s linear infinite;
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