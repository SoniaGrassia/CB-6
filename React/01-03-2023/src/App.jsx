import { pokemonList } from "./mock/pokemonList";
import ListPokemon from "./components/listPokemons";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Gallery />
      <ListPokemon listData={pokemonList} />
    </div>
  );
};

export default App;
