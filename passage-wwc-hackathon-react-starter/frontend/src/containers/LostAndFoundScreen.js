import React, { useState, useEffect } from "react";
import SubHeaderBar from "../components/SubHeaderBar";
import styles from "../styles/LostAndFoundScreen.module.css";
import Select from "react-select";
import typeOptions from "../mockData/petType.json";
import sizeOptions from "../mockData/size.json";
import breedOptions from "../mockData/breed.json";
import genderOptions from "../mockData/gender.json";
//import lostPets from "../mockData/mockData.json";
import PetCard from "../components/PetCard";
import noResults from "../assets/no_results.png";

const LostAndFoundScreen = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [filteredPets, setFilteredPets] = useState([]);
  const [lostPets, setLostPets] = useState([]);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption);
  };

  const handleBreedChange = (selectedOption) => {
    setSelectedBreed(selectedOption);
  };

  const handleGenderChange = (selectedOption) => {
    setSelectedGender(selectedOption);
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const newFilteredPets = lostPets.filter((pet) => {
      const typeMatch =
        !selectedType ||
        pet.species.toLowerCase() === selectedType.value.toLowerCase();
      const sizeMatch =
        !selectedSize ||
        pet.size.toLowerCase() === selectedSize.value.toLowerCase();
      const breedMatch =
        !selectedBreed ||
        pet.breed.toLowerCase === selectedBreed.value.toLowerCase();
      const genderMatch =
        !selectedGender ||
        pet.gender.toLowerCase() === selectedGender.value.toLowerCase();
      const searchMatch =
        !searchText ||
        pet.name.toLowerCase().includes(searchText.toLowerCase());

      return typeMatch && sizeMatch && breedMatch && genderMatch && searchMatch;
    });

    setFilteredPets(newFilteredPets);
    setSearchClicked(true);

    // Reset the fields after search
    setSelectedSize(null);
    setSelectedBreed(null);
    setSelectedType(null);
    setSelectedGender(null);
    setSearchText("");
  };

  useEffect(() => {
    fetch("/pet-lost-and-found").then(res => {
        return res.json()
    }).then(data => {
        setLostPets(data);
    })
  }, []);

  return (
    <div className={styles.screenContainer}>
      <SubHeaderBar title="Lost and Found" />
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <Select
            className={styles.typeDropdown}
            value={selectedType}
            onChange={handleTypeChange}
            options={typeOptions}
            placeholder="Select a type"
          />
          <Select
            className={styles.categoryDropdown}
            value={selectedSize}
            onChange={handleSizeChange}
            options={sizeOptions}
            placeholder="Select a Size"
          />
          <Select
            className={styles.categoryDropdown}
            value={selectedBreed}
            onChange={handleBreedChange}
            options={breedOptions}
            placeholder="Select a Breed"
          />
          <Select
            className={styles.categoryDropdown}
            value={selectedGender}
            onChange={handleGenderChange}
            options={genderOptions}
            placeholder="Select a Gender"
          />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {searchClicked ? (
        filteredPets.length === 0 ? (
          <div className={styles.centerMessage}>
            <img src={noResults} />
            <h2 className={styles.noResultsMessage}>
              No matching results found. <br /> Please try again later
            </h2>
          </div>
        ) : (
          <div className={styles.lostAndFoundCards}>
            {filteredPets.map((pet) => (
              <PetCard key={pet.name} pet={pet} />
            ))}
          </div>
        )
      ) : (
        <div className={styles.lostAndFoundCards}>
          {lostPets.map((pet) => (
            <PetCard key={pet.name} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LostAndFoundScreen;
