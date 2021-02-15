import {createReducer} from '@reduxjs/toolkit';
import {disableFilter, fetchPokemons, filterPokemons} from './actions';

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    prevY: 0,
    page: 0,
    isLoading: false,
    filtering: false,
}

const pokemonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = [...new Set([...state.pokemons, ...action.payload])];
            state.pokemonsFiltered = state.pokemons;
            state.isLoading = false;
            state.page += 1;
        })
        .addCase(fetchPokemons.pending, ( state, actions ) => {
            state.isLoading = true;
        })
        .addCase(filterPokemons, (state, action) => {
            if (action.payload.filterBy === null || action.payload.filterBy === '') {
                state.filtering = false;
            } else {
                state.filtering = true;
            }
            state.pokemonsFiltered = state.pokemons.filter((pokemon) => pokemon.name.includes(action.payload.filterBy))
        })
        .addCase(disableFilter, (state, action) => {
            state.filtering = false;
        })
})

export default pokemonReducer;