import React, { useState, useEffect } from 'react'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

    useEffect(() => {
    const fetchPoke = async () => {
            const res = await fetch(url)
            const data = await res.json()
            
            setPokemon(data.results)
            console.log(pokemon)
        }
        fetchPoke()
    }, [])


  return (
        pokemon.map((poke, index) => {
            return <p key={index}>{poke.name}</p>
        })
  )
}

export default PokeApi