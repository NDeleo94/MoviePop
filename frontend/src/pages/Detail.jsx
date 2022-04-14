import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../utils/getSingleMovie";

import styles from "../pages styles/Detail.module.css";
import { cleanTags } from "../utils/cleanTags";

import { WaitImg } from "../components/WaitImg";
import { getImage } from "../utils/getImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { Rating } from "../components/Rating";
import { getRating } from "../utils/getRating";

export function Detail() {
  const { peliculaId } = useParams();
  // console.log(peliculaId);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [toggle, setToggle] = useState(false);
  const [favorite, setFavorite] = useState(regular);

  function favoriteToggle() {
    if (!toggle) {
      setFavorite(solid);
    } else {
      setFavorite(regular);
    }
    setToggle(!toggle);
  }

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
      <div className={styles.favoriteSection}>
        <button className={styles.favoriteButton} onClick={favoriteToggle}>
          <FontAwesomeIcon icon={favorite} size="2x" />
        </button>
        <Rating stars={getRating(movie.rating)} />
      </div>
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
