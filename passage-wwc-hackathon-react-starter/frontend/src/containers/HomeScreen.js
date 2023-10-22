import React, { useState } from "react";
import "./HomeScreen.css";
import whitePaw from "../assets/white_paw.png";
import lilacPaw from "../assets/lilac_paw.png";
import lilacDog from "../assets/lilac_dog.png";
import yellowCat from "../assets/yellow_cat.png";
import yellowPaw from "../assets/yellow_paw.png";
import dogAndWoman from "../assets/dog_woman.png";
import volunteer from "../assets/volunteer.png";
import donate from "../assets/donations.png";
import PetOverviewCard from "../components/PetOverviewCard";
import HelperCard from "../components/HelperCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import pets from "../mockData/mockData.json";
import { Link } from "react-router-dom";
import { ControllerTest } from "../components/ControllerTest";

const HomeScreen = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const maxCards = 5;

  const handleNext = () => {
    if (startIndex + cardsPerPage < maxCards) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visiblePets =
    startIndex === 2
      ? pets.slice(startIndex, startIndex + cardsPerPage - 1)
      : pets.slice(startIndex, startIndex + cardsPerPage);
  const shouldShowViewMore = startIndex + cardsPerPage === maxCards;

  return (
    
    <div className="home-screen-wrapper">
      <ControllerTest/>
      <div className="banner-wrapper">
        <div className="l-container">
          <img className="yellow-cat" src={yellowCat} />
          <img className="lilac-paw" src={lilacPaw} />
        </div>
        <div className="m-container">
          <h1 className="banner-text">
            Looking for a <span className="lilac-word">good</span> time?
          </h1>
          <div>
            <p className="banner-sub-text">
              Your search ends here! Our lovable Pets are eager to bring joy and
              companionship to your life. Don't wait, make a lifelong connection
              today!
            </p>
          </div>
          <Link to={"/adopt"}>
            <button className="adopt-button">
              <span> Adopt now</span>
              <img alt="Adopt now" src={whitePaw} />
            </button>
          </Link>
        </div>

        <div className="r-container">
          <img className="lilac-dog" src={lilacDog} />
          <img className="yellow-paw" src={yellowPaw} />
        </div>
      </div>
      <div className="pet-scroll-container">
        <h2>
          Let’s find your new <span className="lilac-word">Best Friend!</span>
        </h2>
        <div className="carousal-container">
          <FaChevronLeft size="3rem" onClick={handlePrev} />
          <div className="carousal">
            {visiblePets.map((pet) => (
              <PetOverviewCard
                key={pet.name}
                name={pet.name}
                desc={pet.description}
              />
            ))}
            {shouldShowViewMore && (
              <Link to={"/adopt"}>
                <div className="viewMore">
                  <p>View More</p>
                </div>
              </Link>
            )}
          </div>
          <FaChevronRight size="3rem" onClick={handleNext} />
        </div>
      </div>
      <div className="fun-fact-banner">
        <div className="text-container">
          <h2>
            Fun facts about <span className="lilac-word">Pets:</span>
          </h2>
          <p>
            Did you know: <br /> "Studies show that owning pets can reduce
            stress, lower blood pressure, and even boost your mood. They truly
            are furry stress-relievers.”For more facts like this, click here.{" "}
            <br />
            to your life. Don't wait, make a lifelong connection today!
          </p>
        </div>

        <img className="dog-woman" src={dogAndWoman} />
      </div>
      <div className="helper-container">
        <HelperCard
          image={volunteer}
          text="Join us in making tails wag and hearts purr – become a volunteer at our pet adoption center and be a part of the love-filled journey to finding forever homes for our furry friends!"
          buttonText="Volunteer"
        />
        <HelperCard
          image={donate}
          text="Your generosity can change lives – make a donation today to support our mission and help provide loving care, shelter, and hope to pets in need."
          buttonText="Donate"
        />
      </div>
    </div>
  );
};
export default HomeScreen;
