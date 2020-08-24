import React from 'react';
import PokemonListProvider from './Context/pokemonListContext';
import Hero from './components/Hero';

const App = () => {

  return (
    <PokemonListProvider>
      <Hero />
    </PokemonListProvider>
  );
}

export default App;
