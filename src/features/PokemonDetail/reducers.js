import {createReducer} from "@reduxjs/toolkit";
import {selectPokemon} from "./actions";

const initialState = {
    selectedPokemonId: null,
}

const pokemonDetailReducer = createReducer(initialState, builder => {
    builder
        .addCase(selectPokemon, (state, action) => {
            state.selectedPokemonId = action.payload
        })
})

export default pokemonDetailReducer;