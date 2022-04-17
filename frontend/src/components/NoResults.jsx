import styles from "../components styles/NoResults.module.css";

export function NoResults({text}) {
  return <div className={styles.noResults}>{text}</div>;
}
