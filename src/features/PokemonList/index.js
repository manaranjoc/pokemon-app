import React from "react";
import {useSelector} from "react-redux";
import Pokemon from "./Pokemon";
import styles from "./PokemonList.module.css"

export function PokemonList() {

    const { pokemons } = useSelector(state => state.pokemon)

    return (
        <div className={styles.pokemonList}>
            { pokemons.map( pokemon => (
                <Pokemon image={pokemon.image} name={pokemon.name}/>
            )) }
        </div>
    )
}