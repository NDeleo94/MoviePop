import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faHouseChimney,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../components styles/NavBar.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavBar({ page }) {
  const [styleButton, setStyleButton] = useState([0, 0, 1, 0]);
  const [hidden, setHidden] = useState(true);

  const history = useNavigate();

  function styleActive(is_active) {
    if (is_active) {
      return styles.colorA;
    }
    return styles.colorB;
  }

  function is_hidden(hide) {
    if (hide) return styles.hiddenButton;
  }

  useEffect(() => {
    if (page === "Profile") {
      setStyleButton([1, 0, 0, 0]);
      setHidden(false);
    } else if (page === "FavList") {
      setStyleButton([0, 1, 0, 0]);
      setHidden(false);
    } else if (page === "Home") {
      setStyleButton([0, 0, 1, 0]);
      setHidden(false);
    } else if (page === "Grid") {
      setStyleButton([0, 0, 0, 1]);
      setHidden(false);
    } else if (page === "Detail") {
      setHidden(true);
    }
  }, [page]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <button
            className={`${styles.navButtonBack} ${is_hidden(!hidden)}`}
            onClick={() => history(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
          </button>
        </li>
        <li>
          <button
            className={`${styles.navButton} ${styleActive(
              styleButton[3]
            )} ${is_hidden(hidden)}`}
            onClick={() => history("/buscar/")}
          >
            <FontAwesomeIcon icon={faSearch} size={"2x"} />
          </button>
        </li>
        <li>
          <button
            className={`${styles.navButton} ${styleActive(
              styleButton[2]
            )} ${is_hidden(hidden)}`}
            onClick={() => history("/")}
          >
            <FontAwesomeIcon icon={faHouseChimney} size={"2x"} />
          </button>
        </li>
        <li>
          <button
            className={`${styles.navButton} ${styleActive(
              styleButton[1]
            )} ${is_hidden(hidden)}`}
            onClick={() => history("/favorites/")}
          >
            <FontAwesomeIcon icon={faHeart} size={"2x"} />
          </button>
        </li>
        <li>
          <button
            className={`${styles.navButton} ${styleActive(
              styleButton[0]
            )} ${is_hidden(hidden)}`}
            onClick={() => history("/login/")}
          >
            <FontAwesomeIcon icon={faUser} size={"2x"} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
