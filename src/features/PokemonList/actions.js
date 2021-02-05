import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getPokemons} from "../../API/pokemonAPI";

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetch',
    async (page, thunkAPI) => {
        const response = await getPokemons(page)
        return response.data.results
    });

export const filterPokemons = createAction('pokemons/filter', function prepare(filterBy) {
    return {
        payload: {
            filterBy
        }
    }
})

export const disableFilter = createAction('pokemons/disableFilter');