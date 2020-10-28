import React from 'react';
import TMBDImage from '../../components/TMBDImage/TMBDImage';
import { Movie } from '../../models/Movie';
import styles from './MovieCard.module.css';

interface Props {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Image}><TMBDImage imageSource={movie.poster_path} /></div>
            <div className={styles.Description}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>

            </div>
        </div>
    )
}

export default MovieCard