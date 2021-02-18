import {createReducer} from '@reduxjs/toolkit';
import {addPokemonToComparison, closeComparisonPokemons} from './action';

const initialState = {
  comparisonPokemons: [],
};

const pokemonComparisonReducer = createReducer(initialState, builder => {
  builder
    .addCase(addPokemonToComparison, (state, action) => {
      if (state.comparisonPokemons.length === 2) {
        state.comparisonPokemons.shift();
      }
      state.comparisonPokemons.push(action.payload);
    })
    .addCase(closeComparisonPokemons, (state, action) => {
      state.comparisonPokemons = [];
    });
});

export default pokemonComparisonReducer;