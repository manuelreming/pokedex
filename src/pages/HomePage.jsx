import React from "react";
import FormTrainer from "../components/HomePage/FormTrainer";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <img className="home-page__img" src={"/pokedex.png"} alt="" />
      </div>
      <h2 className="home-page__greeting">¡Hola entrenador!</h2>
      <p className="home-page__instruction">
        Para poder comenzar, dame tu nombre
      </p>
      <FormTrainer />
      <div className="home-page__barraone"></div>
      <div className="home-page__barratwo"></div>
    </div>
  );
};

export default HomePage;
