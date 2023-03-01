import Button from "../button";
import "./index.css";

const CardPokemon = ({ pokemonData }) => {
  return (
    <div className="CardPokemon">
      <img
        className="imgPokemon"
        src={pokemonData.image}
        alt={pokemonData.name}
      />
      <hr />
      <div className="description">
        <h2 className="name">
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </h2>
        <p className="ability">Ability:{pokemonData.ability[0]}</p>
        <p className="type">Type: {pokemonData.type[0]}</p>
      </div>
      <Button text="Seleziona" name={pokemonData.name} />
    </div>
  );
};

export default CardPokemon;
