import React, { Component, useContext } from 'react';
import {CatalogMovie} from '../Context/CatalogContext'

class MovieClass extends Component {
    static contextType = CatalogMovie

    componentDidMount() {
        const movieContext = this.context

        this.setState(movieContext)
        console.log('class',movieContext)
    }
    
    render() {
        const movie = this.state
        console.log(movie)
        return (
            <div>
                <h1>Berikut ini adalah daftar Movie terpopuler</h1>
            <ul>
                {movie.map(catalog => (
                        <li>
                            {catalog.name}, Publish {catalog.year}
                        </li>
                        ))}
            </ul>
            </div>
        );
    }
}

export default MovieClass;