import styled from "styled-components";
import { LinkDom as Link } from "../../components/Header";


const Container = styled.div`
    width: 100%;
    height: calc(100dvh - 75px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

`

const Text = styled.h1`
    font-size: ${props => props.size || "100px"};
`

const LinkDom = styled(Link)`
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.blue};
    padding: 10px 15px;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    margin-top: 15px;
`

const Error = () => {
    return (
        <Container>
            <Text>404</Text>
            <Text as={"p"} size="28px">Não encontramos essa página :(</Text>
            <LinkDom to='/'>Retornar ao inicio</LinkDom>
        </Container>
    )
}

export default Error;