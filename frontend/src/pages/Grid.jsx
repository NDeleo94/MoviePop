import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

import styles from "../pages styles/Grid.module.css"

export function Grid() {
  return (
      <div>
        <Search />
        <h1 className={styles.h1}>Películas</h1>
        <hr className={styles.hr}/>
        <MoviesGrid />
      </div>
  );
}