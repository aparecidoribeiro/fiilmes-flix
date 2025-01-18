import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import { theme } from './config/theme';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import ListFilmes from './pages/ListFilmes';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

*, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    outline: 0;
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
                    <Route path='/filme/:nome' element={<ListFilmes />} />


                    <Route path='*' element={<Error />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default RoutesApp;