import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../utils/getSingleMovie";

import styles from "../pages styles/Detail.module.css";
import { cleanTags } from "../utils/cleanTags";

import { WaitImg } from "../components/WaitImg";
import { getImage } from "../utils/getImage";

export function Detail() {
  const { peliculaId } = useParams();
  // console.log(peliculaId);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getSingleMovie(peliculaId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [peliculaId]);

  if (isLoading) {
    return <WaitImg />;
  }

  return (
    <div className={styles.detailContainer}>
      <img
        className={styles.col + " " + styles.movieImage + " " + styles.objetfit}
        src={getImage(movie.image)}
        alt={"poster " + movie.name}
      />
      <div className={styles.col + " " + styles.movieDetails}>
        <h1>{movie.name}</h1>
        <p className={styles.p}>
          <strong>Lenguaje: </strong>
          {movie.language ? movie.language : "?"}
        </p>
        <p className={styles.p}>
          <strong>Géneros: </strong>
          {movie.genres.length ? movie.genres.join(", ") : "?"}
        </p>
        <p className={styles.p}>
          <strong>Fecha de Estreno: </strong>
          {movie.premiered}
        </p>
        <h1>Sinopsis </h1>
        <p className={styles.p}>{cleanTags(movie.summary)}</p>
      </div>
    </div>
  );
}
