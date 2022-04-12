import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHouseChimney, faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles components/NavBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">
            <button className={styles.navButton}>
              <FontAwesomeIcon icon={faHouseChimney} />
            </button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/Buscar">
            <button className={styles.navButton}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}