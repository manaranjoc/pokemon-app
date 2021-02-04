import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./features/PokemonList/reducers";
import pokemonDetailReducer from "./features/PokemonDetail/reducers";


const reducer = {
    pokemon: pokemonReducer,
    pokemonSelected: pokemonDetailReducer,
}

const store = configureStore({reducer})

export default store;
