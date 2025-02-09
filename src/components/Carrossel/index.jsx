import React from 'react';
import { Carousel } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    width: 100%;
    height: 450px;

    @media (max-width: 1000px) {
        height: 350px;
    }

    @media (max-width: 750px) {
        height: 300px;
    }

    @media (max-width: 600px) {
        height: auto;
    }
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 80% 20%;
`

//https://image.tmdb.org/t/p/original/${filme.poster_path}
const Carrossel = ({ banner }) => {
    const onChange = (currentSlide) => {
    };
    return (
        <Carousel afterChange={onChange} autoplay>
            {banner.map((item) => {
                return (
                    < Container key={item.id} to={`/filme/${item.id}`}>
                        <Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                    </Container>
                )
            })}
        </Carousel >
    );
};
export default Carrossel;