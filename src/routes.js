import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import ListFilmes from './pages/ListFilmes';
import Footer from './components/Footer';
import Filme from './pages/Filme';
import { FilmesProvider } from './contexts/FilmesProvider';


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <FilmesProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='/filmes/:nome' element={<ListFilmes />} />
                    <Route path='/filme/:id' element={<Filme />} />

                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </FilmesProvider>

        </BrowserRouter>
    )
}

export default RoutesApp;