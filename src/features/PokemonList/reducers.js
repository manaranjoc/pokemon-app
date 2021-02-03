import {createReducer} from "@reduxjs/toolkit";
import {fetchPokemons} from "./actions";

const initialState = {
    pokemons: []
}

const pokemonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
        })
})

export default pokemonReducer;