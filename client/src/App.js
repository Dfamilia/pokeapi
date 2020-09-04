import React from 'react';
import PokemonListProvider from './Context/pokemonListContext';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';
const App = () => (
  <PokemonListProvider>
    <Navbar />
    <Hero />
  </PokemonListProvider>
);

export default App;
