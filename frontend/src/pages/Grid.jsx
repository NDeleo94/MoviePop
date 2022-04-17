import { MoviesGrid } from "../components/MoviesGrid";
import { NavBar } from "../components/NavBar";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

import styles from "../pages styles/Grid.module.css";

export function Grid() {
  const query = useQuery();
  const search = query.get("search");

  const searchDebounced = useDebounce(search, 300);

  return (
    <div>
      <NavBar page={"Grid"}/>
      <Search />
      <h1 className={styles.h1}>Películas</h1>
      <hr className={styles.hr} />
      <MoviesGrid key={searchDebounced} search={searchDebounced} />
    </div>
  );
}
