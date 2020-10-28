import React, { useEffect, useState } from 'react';

import { fetchMovies } from '../../utils/Utils';
import { Movie } from '../../models/Movie';
import MoviesList from '../../components/MoviesList/MoviesList';
import styles from './MoviesContainer.module.css';
import Search from '../../components/Search/Search';

const MoviesContainer: React.FunctionComponent = () => {
    const [movies, setMovies] = useState(new Array<Movie>());
    const [filteredMovies, setFilteredMovies] = useState(new Array<Movie>());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMovies()
            .then(res => {
                setMovies(res)
                setFilteredMovies(res)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, []);

    const renderMovies = () => {
        console.log(error)
        if (error) {
            return <h1 style={{ textAlign: "center" }}>error getting movies: {error}</h1>
        }
        return <div className={styles.Container}>
            <h1 style={{ textAlign: "center" }}>Movies</h1>
            {isLoading ? <div>Loading... </div> :
                movies.length && <>
                    <Search onChange={(e) => handleInputChange(e)} />
                    <MoviesList list={filteredMovies} /></>}
        </div>

    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = new RegExp(event.target.value, 'i');
        movies.length && setFilteredMovies(movies.filter(movie => searchTerm.test(movie.overview)))
    }

    return renderMovies()
}

export default MoviesContainer;