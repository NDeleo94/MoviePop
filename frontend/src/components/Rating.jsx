import styles from "../components styles/Rating.module.css"

export function Rating({ stars }) {
  // Star maximum
  const maxStars = 10;

  // Get the entire value
  const starPercentage = (stars / maxStars) * 100;

  // Round the percentage
  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%"
    };
  };

  return (
    <div className={styles.starsgray}>
      <div className={styles.starsyellow} style={StarStyles()}></div>
    </div>
  );
}