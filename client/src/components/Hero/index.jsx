import React, { useContext, useState, useEffect, useRef, useCallback, Fragment } from 'react';

import { PokemonListContext } from '../../Context/pokemonListContext';
import getPokemonByURL from '../../util/Helpers/getPokemonByURL';
import Pokemon from '../Pokemon/index';



const Hero = () => {
    const { pokemonList } = useContext(PokemonListContext);
    const [pokemonStatsList, setPokemonStatsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nextSearch, setNextSearch] = useState(true);
    const observer = useRef();

    const lastPokemonElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setNextSearch(true);
            }
        })

        if (node) observer.current.observe(node)

    }, [loading])

    useEffect(() => {

        if (!nextSearch || pokemonList.length <= 0) return;
        const cantPokemonsSearched = pokemonStatsList.length;
        setLoading(true);
        Promise.all(pokemonList.slice(cantPokemonsSearched, cantPokemonsSearched + 25).map(pokemon => getPokemonByURL(pokemon.url)))
            .then(resp => {
                setLoading(false);
                setNextSearch(false);
                setPokemonStatsList(prevPokemons => [...new Set([...prevPokemons, ...resp])])
            });

    }, [pokemonList, nextSearch, pokemonStatsList])

    return (
        < div >
            {
                pokemonStatsList.map((pokemon, i) => (
                    <Pokemon ref={pokemonStatsList.length === i + 1 ? lastPokemonElementRef : null} key={pokemon.name} pokemonInfo={pokemon} />
                ))
            }
        </div >
    )
}

export default Hero;
