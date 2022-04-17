import { MoviesFav } from "../components/MoviesFav";
import { NavBar } from "../components/NavBar";
import { Search } from "../components/Search";

import styles from "../pages styles/Grid.module.css";

export function FavList() {

  return (
    <div>
      <NavBar page={"FavList"}/>
      <Search />
      <h1 className={styles.h1}>Tus Favoritas</h1>
      <hr className={styles.hr} />
      <MoviesFav />
    </div>
  );
}