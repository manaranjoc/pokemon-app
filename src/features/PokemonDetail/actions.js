import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPokemon} from "../../API/pokemonAPI";


export const selectPokemon = createAsyncThunk(
    "pokemons/select",
    async (selectedId, thunkAPI) => {
        const [pokemon, description]  = await Promise.all(getPokemon(selectedId));
        return {
            name: pokemon.data.name,
            weight: pokemon.data.weight,
            height: pokemon.data.height,
            stats: pokemon.data.stats,
            abilities: pokemon.data.abilities,
            types: pokemon.data.types,
            description: description.data.flavor_text_entries[0].flavor_text,
            image: pokemon.data.sprites.front_default,
        }
    });