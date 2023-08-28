import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeApi = () => {
    const [pokemon, setPokemon] = useState();

    const RandomPokemonId = () => {
        return Math.floor(Math.random() * 1281) + 1;
    }

    const fetchRandomPokemon = async () => {
        const randomPokemonId = RandomPokemonId();
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
            setPokemon(response.data);
        } catch (error) {
            console.log("error fetching random pokemon", error);
        }
    }

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    return (
        <div>
            <h1>Tu pokemon es: {pokemon && pokemon.name}</h1>
            {pokemon && (
                <div>
                    <img src={pokemon.sprites.front_default} height={150} alt={pokemon.name} />
                </div>
            )}
            <button onClick={fetchRandomPokemon}>Cambiar</button>
        </div>
    );
}

export default PokeApi;