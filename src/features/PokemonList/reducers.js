import {createReducer} from "@reduxjs/toolkit";
import {fetchPokemons, filterPokemons} from "./actions";

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
}

const pokemonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            state.pokemonsFiltered = action.payload
        })
        .addCase(filterPokemons, (state, action) => {
            state.pokemonsFiltered = state.pokemons.filter((pokemon) => pokemon.name.includes(action.payload.filterBy))
        })
})

export default pokemonReducer;