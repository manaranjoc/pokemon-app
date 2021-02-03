import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./features/PokemonList/reducers";


const reducer = {
    pokemon: pokemonReducer,
}

const store = configureStore({reducer})

export default store;
