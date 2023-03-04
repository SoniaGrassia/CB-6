import { useState, useEffect } from "react";
import Button from "../button";
import "./index.css";

const CardPokemon = ({ pokemonData, setPokemonModal }) => {
  const [infoPokemon, setInfoPokemon] = useState({
    sprites: { other: { dream_world: {} } },
    name: "",
    abilities: [{ ability: {} }],
    types: [{ type: {} }],
  });
  // console.log(pokemonData);
  useEffect(() => {
    fetch(pokemonData.url)
      .then((res) => res.json())
      .then((data) => setInfoPokemon(data));
  }, [pokemonData.url]);
  return (
    <div className="CardPokemon">
      <img
        className="imgPokemon"
        src={infoPokemon.sprites.other.dream_world.front_default}
        alt={infoPokemon.name}
      />
      <hr />
      <div className="description">
        <h2 className="name">{infoPokemon.name.toUpperCase()}</h2>
        <p className="ability">
          Ability: {infoPokemon.abilities[0].ability.name}
        </p>
        <p className="type">Type: {infoPokemon.types[0].type.name}</p>
      </div>
      <Button setPokemonModal={setPokemonModal} />
    </div>
  );
};

export default CardPokemon;
