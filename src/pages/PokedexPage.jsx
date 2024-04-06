import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelectType from "../components/PokedexPage/SelectType";
import "../styles/PokedexPage.css";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemons");
  const inputSearch = useRef();
  const trainer = useSelector((states) => states.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0";
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getPokeByType(typeSelected);
    }
  }, [typeSelected]);
  useEffect(() => {
    if (pokemons) {
      const filteredPokemons = pokemons.results.filter((poke, index) =>
        poke.name.includes(pokeSearch)
      );
      setItems(
        filteredPokemons.slice(currentPage * 10, (currentPage + 1) * 10)
      );
    } else {
      setItems([]);
    }
  }, [pokemons, pokeSearch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };
  const pokemonsFiltered = pokemons?.results.filter((poke, index) => {
    return poke.name.includes(pokeSearch);
  });

  const nextHandler = () => {
    let totalElements;
    if (typeSelected === "allPokemons") {
      console.log(pokemons);
      totalElements = pokemons.results.length;
    } else {
      totalElements = pokemonsFiltered.length;
    }

    const nextPage = currentPage + 1;
    const firstIndex = nextPage * 10;

    if (firstIndex >= totalElements) return;

    if (typeSelected === "allPokemons") {
      setItems(pokemons.results.slice(firstIndex, firstIndex + 10));
    } else {
      setItems(pokemonsFiltered.slice(firstIndex, firstIndex + 10));
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevHandler = () => {
    const nextPage = currentPage - 1;

    if (nextPage < 0) return;

    const firstIndex = nextPage * 10;
    setItems(pokemonsFiltered.slice(firstIndex, firstIndex + 10));
    setCurrentPage(nextPage);
  };

  return (
    <div className="pokedex">
      <div className="pokedex__barrone"></div>
      <div className="pokedex__barrtwo"></div>
      <div className="pokedex__header">
        <img className="pokedex__img" src="/pokedex1.png" alt="pokedex" />
      </div>
      <div>
        <p className="pokedex__parr">
          <span className="pokedex__user">Welcome {trainer}</span>, here you can
          find your favorite pokemon
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="pokedex__input" ref={inputSearch} type="text" />
        <button className="pokedex__search">Search</button>
        <SelectType setTypeSelected={setTypeSelected} />
      </form>

      <ListPokemons
        pokemons={items}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />
    </div>
  );
};

export default PokedexPage;
