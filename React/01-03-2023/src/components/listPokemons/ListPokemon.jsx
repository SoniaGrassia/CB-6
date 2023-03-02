import CardPokemon from "../cardPokemon";
import "./index.css";

const ListPokemon = ({ listData }) => {
  return (
    <div className="containerList">
      <hr />
      <h2>Lista dei Pokemon</h2>
      <div className="ListPokemon">
        {listData.map((pokemon) => (
          <CardPokemon pokemonData={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default ListPokemon;
