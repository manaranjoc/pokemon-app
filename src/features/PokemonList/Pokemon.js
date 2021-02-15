import React from 'react'
import styles from './Pokemon.module.css'
import {useDispatch} from 'react-redux';
import {selectPokemon} from '../PokemonDetail/actions';
const {REACT_APP_IMAGES_POKEMONS: URL_IMAGE} = process.env;

const Pokemon = ({image, name}) => {

    const dispatcher = useDispatch();

    const select = () => {
        dispatcher(selectPokemon(image));
    }

    return (
        <div className={styles.pokemonContainer} onClick={select}>
            <img src={`${URL_IMAGE}/${image}.png`} alt={name} className={styles.pokemonImage}/>
            <h4 className={styles.pokemonName}>{name}</h4>
        </div>
    )
}

export default Pokemon;