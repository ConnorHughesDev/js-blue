import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import PokeDisplay from './Components/PokeDisplay';

function App() {
  
  //Concepts:
  //state
  //props
  //useEffect
  
  //GOAL: fetch pokemons and display their info on the screen!!! Woohoo!!!
        //empty var   //set function, state function FUNCTION FUNCTION FUNCTION
  const [pokemon,  setPokemon] = useState([]);

  const fetchPokemons = async (name) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(json => {
      setPokemon(json);
      console.log(pokemon);
    });
  }

  return (
    <div className="App">
      <h1>Look at all these awesome mons</h1>
      <PokeDisplay pokemon={pokemon} fetchPokemons={fetchPokemons}/>
    </div>
  );
}

export default App;