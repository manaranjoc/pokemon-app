import {createAction} from "@reduxjs/toolkit";


export const addPokemonToComparison = createAction("pokemon/addComparison");

export const closeComparisonPokemons = createAction("pokemon/closeComparison");