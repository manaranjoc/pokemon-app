import React from "react";
import {useSelector} from "react-redux";
import Pokemon from "./Pokemon";

export function PokemonList() {

    const { pokemons } = useSelector(state => state.pokemon)

    return (
        <div>
            { pokemons.map( pokemon => (
                <Pokemon image={pokemon.image} name={pokemon.name}/>
            )) }
        </div>
    )
}