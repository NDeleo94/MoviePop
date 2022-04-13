import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "../components styles/WaitImg.module.css";

export function WaitImg() {
  return (
    <div className={styles.img}>
      <FontAwesomeIcon
        icon={faSpinner}
        className={styles.waiting}
        size={"5x"}
      />
    </div>
  );
}
