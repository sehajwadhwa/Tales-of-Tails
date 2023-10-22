import styles from "../styles/PetOverviewCard.module.css";

export const PetOverviewCard = ({ pet }) => {
  return (
    <div className={styles.petContainer}>
      <img className={styles.dogImage} src={pet.Image} />
      <h3 className={styles.headerContainer}>Meet {pet.name}!</h3>
      <p className={styles.textContainer}>{pet.description}</p>
    </div>
  );
};

export default PetOverviewCard;
