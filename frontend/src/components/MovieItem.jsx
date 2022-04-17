import { Link } from "react-router-dom";

import styles from "../components styles/MovieItem.module.css";

import { getImage } from "../utils/getImage";

export function MovieItem({ movie }) {
  return (
    <li className={styles.movieItem}>
      <Link to={"/pelicula/" + movie.show.id}>
        <img
          className={styles.movieImage + " " + styles.objetfit}
          width={230}
          height={345}
          src={getImage(movie.show.image)}
          alt={"poster " + movie.show.name}
        />
        <div className={styles.movieTitle}>{movie.show.name}</div>
      </Link>
    </li>
  );
}
