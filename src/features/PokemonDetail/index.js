import React from "react";
import {useSelector} from "react-redux";
import styles from "./PokemonDetail.module.css";


export function PokemonDetail() {

    const {selectedPokemon} = useSelector(state => state.pokemonSelected);


    let content = null;


    if (selectedPokemon !== null) {
        content = (
            <div className={styles.modalBackground}>
                <div className={styles.modal}>
                    <div>
                        <h3 className={styles.name}>{selectedPokemon.name.toUpperCase()}</h3>
                    </div>
                    <hr/>
                    <div className={styles.descriptionContainer}>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name} className={styles.pokemonImage}/>
                        <div>
                            <div>
                                {selectedPokemon.description}
                            </div>
                            <hr/>
                            <div>
                                <div className={styles.characteristics}>
                                    <h4>Height</h4>
                                    <p>
                                        {selectedPokemon.height}
                                    </p>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4>Weight</h4>
                                    <p>
                                        {selectedPokemon.weight}
                                    </p>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4>Abilities</h4>
                                    <ul>
                                        {selectedPokemon.abilities.map((ability) => {
                                            return (<li key={ability.slot}>{ability.ability.name}</li>)
                                        })}
                                    </ul>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4>Type</h4>
                                    <ul>
                                        {selectedPokemon.types.map((type) => {
                                            return (<li key={type.slot}>{type.type.name}</li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <hr/>

                </div>
            </div>
        );
    } else {
        content = null;
    }

    return (
        <div>
            {content}
        </div>
    )

}