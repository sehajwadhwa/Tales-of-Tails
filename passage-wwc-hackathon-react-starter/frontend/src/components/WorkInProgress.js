import workingHard from "../assets/working_hard.png";
import styles from "../styles/WorkInProgress.module.css";
export function WorkInProgress() {
  return (
    <div className={styles.centerMessage}>
      <img src={workingHard} />
      <h2 className={styles.noResultsMessage}>
        "Coming soon! <br /> We're enhancing this feature for an even better
        experience."
      </h2>
    </div>
  );
}
