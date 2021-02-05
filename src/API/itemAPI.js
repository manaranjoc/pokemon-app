import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2/'

export function getItems(page) {
    return axios.get(`${BASE_URL}item/?limit=20&offset=${page*20}`);
}

