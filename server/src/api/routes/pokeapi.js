const express = require('express');

const router = express.Router();
const getPokemons = require('../controllers/getPokemons');

router.get('/all', getPokemons.getAllPokemonsList);

module.exports = router;
