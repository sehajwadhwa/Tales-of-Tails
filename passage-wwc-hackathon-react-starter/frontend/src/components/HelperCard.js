import styles from "../styles/HelperCard.module.css";
import { Link } from "react-router-dom";
export const HelperCard = ({ image, text, buttonText }) => {
  return (
    <div className={styles.helperContainer}>
      <img className={styles.helperImage} src={image} />
      <p className={styles.textContainer}>{text}</p>
      <Link
        to={
          buttonText === "Volunteer" ? "/volunteer-screen" : "/donation-screen"
        }
      >
        <button className={styles.helperButton}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default HelperCard;
