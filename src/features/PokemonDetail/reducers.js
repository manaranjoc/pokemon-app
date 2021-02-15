import {createReducer} from '@reduxjs/toolkit';
import {closeDetail, selectPokemon} from './actions';

const initialState = {
  selectedPokemon: null,
}

const pokemonDetailReducer = createReducer(initialState, builder => {
  builder
    .addCase(selectPokemon.fulfilled, (state, action) => {
      state.selectedPokemon = action.payload
    })
    .addCase(closeDetail, (state, action) => {
      state.selectedPokemon = null;
    })
})

export default pokemonDetailReducer;