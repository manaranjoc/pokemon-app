import React from "react"
import styles from "./Pokemon.module.css"

const URL_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default function Pokemon({image, name}) {
    return (
        <div>
            <img src={`${URL_IMAGE}/${image}.png`} alt={name} className={styles.pokemonImage}/>
            <h4 className={styles.pokemonName}>{name}</h4>
        </div>
    )
}