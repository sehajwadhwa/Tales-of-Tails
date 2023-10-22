import {React, useEffect, useState} from "react";
import SubHeaderBar from "../components/SubHeaderBar";
import styles from "../styles/Adopt.module.css";
import PetCard from "../components/PetCard";



const Adopt = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/pet-lost-and-found").then(res => {
        return res.json()
    }).then(data => {
        setPets(data);
    })
  }, []);

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
