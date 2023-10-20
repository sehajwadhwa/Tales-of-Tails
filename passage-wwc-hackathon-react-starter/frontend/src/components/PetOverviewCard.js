import styles from "../styles/PetOverviewCard.module.css";
import dogImage from "../assets/dog_image.png";
export const PetOverviewCard = ({ name, desc }) => {
  return (
    <div className={styles.petContainer}>
      <img className={styles.dogImage} src={dogImage} />
      <h3 className={styles.headerContainer}>Meet {name}!</h3>
      <p className={styles.textContainer}>{desc}</p>
    </div>
  );
};

export default PetOverviewCard;
