import {createReducer} from "@reduxjs/toolkit";
import {closeDetail, selectPokemon} from "./actions";

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
        .addCase(closeDetail, (state, action) => {
            state.selectedPokemon = null;
        })
})

export default pokemonDetailReducer;