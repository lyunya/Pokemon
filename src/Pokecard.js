import React from "react";
import './Pokecard.css';
const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`;

  const { name, type, exp } = props;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img src={imgSrc} alt="pokemon" />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
