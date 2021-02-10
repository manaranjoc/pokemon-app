import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2/'

const getPokemons = (page) => {
    return axios.get(`${BASE_URL}pokemon/?limit=20&offset=${page*20}`);
}

const getPokemon = (pokemonId) => {
    return [
        axios.get(`${BASE_URL}pokemon/${pokemonId}`),
        axios.get(`${BASE_URL}pokemon-species/${pokemonId}`)
    ];
}

export { getPokemons, getPokemon };