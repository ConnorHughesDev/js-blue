import React, {useState} from 'react'

const PokeDisplay = ({ pokemon, fetchPokemons}) => {
    
    const [inputValue, setInputValue] = useState("");

    console.log(inputValue);

    const handlePokeFetch = (name) => {
        fetchPokemons(name);
    }
    
    console.log(pokemon);

    return (
        <div>
            <h2>Take a look at the mons</h2>
            <button  onClick={() => handlePokeFetch(inputValue)}>Yo its a button</button>
            <input onChange={(e) => setInputValue(e.target.value)} placeholder="find a pokemon" />
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.back_default} />
            <h1>{pokemon.height}</h1>
            <h1>{pokemon.weight}</h1>
        </div>
    )
}

export default PokeDisplay;