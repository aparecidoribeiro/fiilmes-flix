import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.black_two};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Span = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    gap: 3px;
`

const Text = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-weight: 500;

    &::before {
        content: " </> ";
    }


    &:hover {
        color: ${({ theme }) => theme.orange};
        transition: color .3s;
    }
`

const Footer = () => {
    return (
        <Container>
            <Span>
                Desenvolvido por
                <Text>Aparecido Ribeiro</Text>
            </Span>
        </Container >
    )
}

export default Footer;