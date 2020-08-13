const express = require('express');

const router = express.Router();
const getPokemons = require('../controllers/getPokemons');

router.get('/all', getPokemons.getAllPokemons);

module.exports = router;
