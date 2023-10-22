import styles from "../styles/PetCard.module.css";
import dogImage from "../assets/dog_image.png";
export const PetCard = ({ pet }) => {
  return (
    <div className={styles.petContainer}>
      <img className={styles.dogImage} src={dogImage} />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{pet.name}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{pet.species}</td>
          </tr>
          <tr>
            <th>Breed</th>
            <td>{pet.breed}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{pet.gender}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{pet.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PetCard;
