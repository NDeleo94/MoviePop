import { Link } from "react-router-dom";

import styles from "../components styles/MovieItem.module.css"

export function MovieItem({ movie }) {
  return (
    <li className={styles.movieItem}>
      <Link to={"/pelicula/" + movie.show.id}>
      <img
          className={styles.movieImage + " " + styles.objetfit}
          width={230}
          height={345}
          src={movie.show.image.original}
          alt={"poster " + movie.show.name}
        />
        <div className={styles.movieTitle}>{movie.show.name}</div>
      </Link>
    </li>
  );
}