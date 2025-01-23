import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.footer`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.black_two};
    display: flex;
    justify-content: center;
    align-items: center;

    order: 3;
`

const Span = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.white};
`

const Text = styled(Link)`
    color: ${({ theme }) => theme.white};
`

const Footer = () => {
    return (
        <Container>
            <Span>Desenvolvido por <Text>Aparecido Ribeiro</Text></Span>
        </Container >
    )
}

export default Footer;