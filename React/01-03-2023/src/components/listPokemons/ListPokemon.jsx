import CardPokemon from "../cardPokemon";
import "./index.css";

const ListPokemon = ({ listData }) => {
  return (
    <div className="ListPokemon">
      {listData.map((pokemon) => (
        <CardPokemon pokemonData={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default ListPokemon;
