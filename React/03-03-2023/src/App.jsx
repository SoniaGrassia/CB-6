import ListPokemon from "./components/listPokemons";
import { useState } from "react";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Modal from "./components/modal";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pokemonModal, setPokemonModal] = useState(null);

  return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <Hero />
      <button className="btn" onClick={() => setDarkMode((prev) => !prev)}>
        <img
          className="icon"
          src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-pikachu-video-games-those-icons-lineal-color-those-icons.png"
          alt="light"
        />
      </button>
      <Gallery />
      <ListPokemon setPokemonModal={setPokemonModal} />
      {pokemonModal ? <Modal setPokemonModal={setPokemonModal} /> : null}
    </div>
  );
};

export default App;
