import React from "react"
import styles from "./Pokemon.module.css"

export default function Pokemon({image, name}) {
    return (
        <div>
            <img src={image??'https://via.placeholder.com/150'} alt={name} className={styles.pokemonImage}/>
            <h4 className={styles.pokemonName}>{name}</h4>
        </div>
    )
}