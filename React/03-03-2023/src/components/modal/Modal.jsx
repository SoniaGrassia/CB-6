// import { useState, useEffect } from "react";
import "./index.css";

const Modal = ({ setPokemonModal }) => {
  return (
    <div className="Modal">
      <div
        className="Modal__overlay"
        onClick={() => setPokemonModal(null)}
      ></div>
      <div className="Modal__content">
        {/* <img
          className="imgPokemon"
          src={infoPokemon.sprites.other.dream_world.front_default}
          alt={infoPokemon.name}
        /> */}
      </div>
    </div>
  );
};

export default Modal;
