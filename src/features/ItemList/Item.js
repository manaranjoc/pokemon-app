import React from "react"
import styles from "./Item.module.css"

const URL_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'

export default function Item({image, name}) {

    return (
        <div className={styles.itemContainer}>
            <img src={`${URL_IMAGE}/${image}.png`} alt={name} className={styles.itemImage}/>
            <h4 className={styles.itemName}>{name}</h4>
        </div>
    )
}