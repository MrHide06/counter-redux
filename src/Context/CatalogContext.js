import React, { createContext, useState } from 'react'

export const CatalogMovie = createContext()

const CatalogContext = (props) => {
    const [catalog, setCatalog] = useState([
        { name: "Back To The Futher", year: 2000 },
        { name: "Joker", year: 2019 },
        { name: "Spiderman", year: 2003}
    ])
    return (
        <div>
            <CatalogMovie.Provider value={{ catalog }}>
                {props.children}
            </CatalogMovie.Provider>
        </div>
    )
}

export default CatalogContext
