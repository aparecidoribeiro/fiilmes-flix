import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import { theme } from './config/theme';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import ListFilmes from './pages/ListFilmes';
import Footer from './components/Footer';
import Filme from './pages/Filme';

const GlobalStyle = createGlobalStyle`

*, body {
    margin: 0;
    padding: 0;
    font-family: "Smooch Sans", serif;
    box-sizing: border-box;
    outline: 0;
}

#root {
}

body {
    height: auto;
    background-color: ${({ theme }) => theme.white_twoo};
}

a {
    text-decoration: none;
}

`

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />

                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='/filmes/:nome' element={<ListFilmes />} />
                    <Route path='/filme/:id' element={<Filme />} />

                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default RoutesApp;