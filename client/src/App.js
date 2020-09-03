import React from 'react';
import PokemonListProvider from './Context/pokemonListContext';
import Hero from './components/Hero/index';

const App = () => {

  return (
    <PokemonListProvider>
      <Hero />
    </PokemonListProvider>
  );
}

export default App;
