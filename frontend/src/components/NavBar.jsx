import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowLeft,
  faHouseChimney,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../components styles/NavBar.module.css";
import { useState } from "react";

export function NavBar() {
  const [styleButton, setStyleButton] = useState([
    styles.colorA,
    styles.colorB,
  ]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/Buscar">
            <button
              className={styles.navButton + " " + styleButton[1]}
              onClick={() => setStyleButton([styles.colorB, styles.colorA])}
            >
              <FontAwesomeIcon icon={faSearch} size={"2x"} />
            </button>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/">
            <button
              className={styles.navButton + " " + styleButton[0]}
              onClick={() => setStyleButton([styles.colorA, styles.colorB])}
            >
              <FontAwesomeIcon icon={faHouseChimney} size={"2x"} />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
