import axios from 'axios'

const {REACT_APP_POKEMON: BASE_URL} = process.env;

const getItems = (page) => {
    return axios.get(`${BASE_URL}item/?limit=20&offset=${page*20}`);
}

export { getItems }
