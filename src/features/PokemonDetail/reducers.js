import {createReducer} from "@reduxjs/toolkit";
import {selectPokemon} from "./actions";

const initialState = {
    selectedPokemon: null,
}

const pokemonDetailReducer = createReducer(initialState, builder => {
    builder
        .addCase(selectPokemon.fulfilled, (state, action) => {
            state.selectedPokemon = action.payload
        })
        .addCase(selectPokemon.rejected, (state, action) => {
            console.log("Rejected")
        })
})

export default pokemonDetailReducer;