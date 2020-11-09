import React from "react";
import './Pokecard.css';
const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`;

  const { name, type, exp } = props;

  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc} alt="pokemon" />
      <div>Type: {type}</div>
      <div>EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
