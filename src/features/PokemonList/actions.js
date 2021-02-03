import { createAsyncThunk } from "@reduxjs/toolkit";
import {pokemonsPaginated} from "../../API/pokemonAPI";

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetch',
    async (page, thunkAPI) => {
        const response = await pokemonsPaginated(0)
        return response.data.results
    })