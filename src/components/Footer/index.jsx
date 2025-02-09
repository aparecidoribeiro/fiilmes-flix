import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.black_two};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
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
                <Text
                    target="blank"
                    rel="external"
                    to={'https://www.linkedin.com/in/aparecido-ribeiro/'}
                >Aparecido Ribeiro
                </Text>
            </Span>
        </Container >
    )
}

export default Footer;