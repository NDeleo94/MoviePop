import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowLeft,
  faHouseChimney,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../components styles/NavBar.module.css";
import { useState } from "react";

export function NavBar() {
  const [styleButton, setStyleButton] = useState([0, 1, 0]);

  function styleActive(is_active) {
    if (is_active) {
      return styles.colorA;
    }
    return styles.colorB;
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/Buscar">
            <button
              className={styles.navButton + " " + styleActive(styleButton[2])}
              onClick={() => setStyleButton([0, 0, 1])}
            >
              <FontAwesomeIcon icon={faSearch} size={"2x"} />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button
              className={styles.navButton + " " + styleActive(styleButton[1])}
              onClick={() => setStyleButton([0, 1, 0])}
            >
              <FontAwesomeIcon icon={faHouseChimney} size={"2x"} />
            </button>
          </Link>
        </li>
        <li>
          <Link to="login/">
            <button
              className={styles.navButton + " " + styleActive(styleButton[0])}
              onClick={() => setStyleButton([1, 0, 0])}
            >
              <FontAwesomeIcon icon={faUser} size={"2x"} />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
