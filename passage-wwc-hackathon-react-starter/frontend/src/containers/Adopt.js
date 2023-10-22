import React from "react";
import SubHeaderBar from "../components/SubHeaderBar";
import styles from "../styles/Adopt.module.css";
import pets from "../mockData/mockData.json";
import PetCard from "../components/PetCard";

const Adopt = () => {
  return (
    <div className={styles.screenContainer}>
      <SubHeaderBar title="Adopt Here" />
      <div className={styles.adoptCards}>
        {pets.map((pet) => (
          <PetCard key={pet.name} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
