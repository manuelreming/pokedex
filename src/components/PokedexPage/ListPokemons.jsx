import React from "react";
import PokeCard from "./PokeCard";
import "../../styles/ListPokemons.css";

const ListPokemons = ({ pokemons, nextHandler, prevHandler }) => {
  return (
    <div>
           <div className="pokemon-container__buttons-container">
          
          <button
            className="pokemon-container__button-previous"
            onClick={prevHandler}
          >
            previous
          </button>
          <button
          
            className="pokemon-container__button-next"
            onClick={nextHandler}
          >
           Next
          </button>
        </div>
      <div className="pokemon-container">
   

        {pokemons?.map((pokeInfo) => (
          <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
        ))}
      </div>
    </div>
  );
};

export default ListPokemons;
