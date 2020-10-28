import React from 'react';
import styles from './TMBDImage.module.css';

interface Props {
    imageSource: string
}

const TMBDImage: React.FunctionComponent<Props> = ({imageSource}) => {
  const fullImageUrl = 'https://image.tmdb.org/t/p/w500/' + imageSource;
    return <div className={styles.Image}>
        <img className={styles.Img} src={fullImageUrl} alt="movie-preview" />
    </div>
}

export default TMBDImage