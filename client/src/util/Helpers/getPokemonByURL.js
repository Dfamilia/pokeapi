const getPokemonByURL = async (pokemonURL) => {
    const resp = await fetch(pokemonURL);
    return resp.json();
}

export default getPokemonByURL;