import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {getPokemon} from '../../API/pokemonAPI';


export const selectPokemon = createAsyncThunk(
    'pokemons/select',
    async (selectedId, thunkAPI) => {
        const [pokemon, description]  = await Promise.all(getPokemon(selectedId));
        return {
            name: pokemon.data.name,
            weight: pokemon.data.weight,
            height: pokemon.data.height,
            stats: pokemon.data.stats,
            abilities: pokemon.data.abilities,
            types: pokemon.data.types,
            description: description.data.flavor_text_entries.find(text => text.language.name === 'en').flavor_text,
            color: description.data.color.name,
            image: pokemon.data.sprites.front_default,
        }
    }
);

export const closeDetail = createAction('pokemons/close');