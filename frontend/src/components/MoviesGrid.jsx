import { useEffect, useState } from "react";
import { getMovies } from "../utils/getMovies";
import { MovieItem } from "./MovieItem";

import styles from "../components styles/MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieItem key={movie.show.id} movie={movie} />
      ))}
    </ul>
  );
}
