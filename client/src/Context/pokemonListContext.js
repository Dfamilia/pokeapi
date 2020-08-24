import React, { useState, useEffect, createContext } from 'react';


export const PokemonListContext = createContext(null);

const Provider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([]);
    // const [error, setError] = useState('')

    useEffect(() => {
        const fetchPokemonList = async () => {
            let resp = await fetch('http://localhost:3030/pokeapi/all');
            resp = await resp.json();
            setPokemonList(resp.results);
        }
        fetchPokemonList();
    }, [])

    return (
        <PokemonListContext.Provider value={{ pokemonList }}>
            {children}
        </PokemonListContext.Provider>
    );
}

export default Provider;