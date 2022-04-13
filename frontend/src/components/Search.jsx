import styles from "../components styles/Search.module.css";

import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            history("/Buscar/?search=" + value);
          }}
        />
      </div>
    </form>
  );
}
