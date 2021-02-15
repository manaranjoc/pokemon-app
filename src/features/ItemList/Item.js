import React from 'react'
import styles from './Item.module.css'
const {REACT_APP_IMAGES_ITEMS: URL_IMAGE} = process.env

const Item = ({image, name}) => {

    return (
        <div className={styles.itemContainer}>
            <img src={`${URL_IMAGE}/${image}.png`} alt={name} className={styles.itemImage}/>
            <h4 className={styles.itemName}>{name}</h4>
        </div>
    )
}

export default Item;