import { createAsyncThunk } from "@reduxjs/toolkit";
import {pokemonsPaginated} from "../../API/pokemonAPI";

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetch',
    async (page, thunkAPI) => {
        const response = await pokemonsPaginated(page)
        console.log(response.data.results)
        return response.data.results
    })