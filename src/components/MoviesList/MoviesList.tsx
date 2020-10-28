import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../models/Movie';

interface Props {
    list: Array<Movie>
}

const MoviesList: React.FunctionComponent<Props> = ({ list }) => {

    const renderCards = () => (
        list.map(movie => (
            <li key={movie.id} style={{ listStyle: "none" }}><MovieCard movie={movie} /></li>)
        )
    )

    return (
        <ul style={{ padding: 0 }}>
            {renderCards()}
        </ul>
    )
}
export default MoviesList;