import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export function pokemonsPaginated(page) {
    return axios.get(`${BASE_URL}?limit=20&offset=${page*20}`)
}