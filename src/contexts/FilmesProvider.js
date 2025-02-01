import { useEffect, useState } from "react";
import { FilmesContext } from "./FilmesContext";


export function FilmesProvider({ children }) {

    const minhaLista = localStorage.getItem('@favoritos')
    const listaConvertida = JSON.parse(minhaLista) || []
    const [filmes, setFilmes] = useState(listaConvertida)

    useEffect(() => {
        if (filmes || []) {
            localStorage.setItem('@favoritos', JSON.stringify(filmes))
        }
    }, [filmes])


    return (
        <FilmesContext.Provider value={{ filmes, setFilmes }}>
            {children}
        </FilmesContext.Provider>
    )

}

