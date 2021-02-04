import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Pokemon from "./Pokemon";
import styles from "./PokemonList.module.css"
import {fetchPokemons} from "./actions";

export function PokemonList() {

    const { pokemonsFiltered } = useSelector(state => state.pokemon)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons(0))
    }, [dispatch])

    return (
        <div className={styles.pokemonList}>
            { pokemonsFiltered.map( pokemon => (
                <Pokemon key={pokemon.name} image={pokemon.url.match(/\d+/g)[1]} name={pokemon.name}/>
            )) }
        </div>
    )
}