import React, {useContext} from 'react'
import { CatalogMovie } from '../Context/CatalogContext'

function MovieFunction() {
    const {catalog} = useContext(CatalogMovie)
    return (
        <div>
            <h1>Berikut ini adalah daftar Movie terpopuler</h1>
            <ul>
                {catalog.map((catalog, index) => {
                    return (
                        <li key={index}>
                            {catalog.name}, Publish {catalog.year}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MovieFunction
