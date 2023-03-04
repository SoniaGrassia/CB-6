import { useState, useEffect } from "react";

import CardPokemon from "../cardPokemon";
import "./index.css";

const ListPokemon = ({ setPokemonModal }) => {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((data) => setListPokemon(data.results));
  }, []);

  // console.log(listPokemon);
  return (
    <div className="containerList">
      <hr />
      <h2>Lista dei Pokemon</h2>
      <div className="ListPokemon">
        {listPokemon.map((pokemon) => (
          <CardPokemon
            pokemonData={pokemon}
            key={pokemon.url}
            setPokemonModal={setPokemonModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPokemon;
