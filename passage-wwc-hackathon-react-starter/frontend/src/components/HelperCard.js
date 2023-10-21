import styles from "../styles/HelperCard.module.css";
export const HelperCard = ({ image, text, buttonText }) => {
  return (
    <div className={styles.helperContainer}>
      <img className={styles.helperImage} src={image} />
      <p className={styles.textContainer}>{text}</p>
      <button className={styles.helperButton}>{buttonText}</button>
    </div>
  );
};

export default HelperCard;
