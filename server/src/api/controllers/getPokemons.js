const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex();

exports.getAllPokemonsList = async (req, res) => {
  const pokemonList = await P.getPokemonsList();
  res.json(pokemonList);
};
