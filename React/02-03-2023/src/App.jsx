import { pokemonList } from "./mock/pokemonList";
import ListPokemon from "./components/listPokemons";
import { useState } from "react";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <Hero />
      <button className="btn" onClick={() => setDarkMode((prev) => !prev)}>
        {/* <img
          src="https://img.icons8.com/officexs/16/null/pokemon.png"
          alt="light"
        /> */}
        <img
          className="icon"
          src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-pikachu-video-games-those-icons-lineal-color-those-icons.png"
          alt="light"
        />
      </button>
      <Gallery />
      <ListPokemon listData={pokemonList} />
    </div>
  );
};

export default App;
