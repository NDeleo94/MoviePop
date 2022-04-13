import { useEffect, useState } from "react";
import { getMovies } from "../utils/getMovies";
import { MovieItem } from "./MovieItem";

import styles from "../components styles/MoviesGrid.module.css";
import { NoResults } from "./NoResults";
import { WaitImg } from "./WaitImg";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search ? search : "star wars";
    getMovies(searchURL).then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, [search]);

  if (!isLoading && movies.length === 0) {
    return <NoResults />;
  }

  if (isLoading) {
    return <WaitImg />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieItem key={movie.show.id} movie={movie} />
      ))}
    </ul>
  );
}
