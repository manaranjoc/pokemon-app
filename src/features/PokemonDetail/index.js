import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./PokemonDetail.module.css";
import {closeDetail} from "./actions";
import {addPokemonToComparison} from "../PokemonComparison/action";


export function PokemonDetail() {

    const {selectedPokemon} = useSelector(state => state.pokemonSelected);

    const dispatcher = useDispatch();

    const closeModal = (e) => {
        if (e.target.id !== '') {
            dispatcher(closeDetail())
        }
    }

    const addComparison = () => {
        dispatcher(addPokemonToComparison(selectedPokemon))
        dispatcher(closeDetail())
    }


    let content = null;


    if (selectedPokemon !== null) {
        content = (
            <div className={styles.modalBackground} onClick={closeModal} id="background">
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h3 className={styles.name}>{selectedPokemon.name.toUpperCase()}</h3>
                        <button aria-label="Close" onClick={closeModal} id="close-button" className={styles.closeButton}>
                            <span aria-hidden="true" id="close-button">x</span>
                        </button>
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
                                        {selectedPokemon.height} m
                                    </p>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4>Weight</h4>
                                    <p>
                                        {selectedPokemon.weight} kg
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
                                <button className={styles.comparisonButton} onClick={addComparison}>
                                    Add to comparison
                                </button>
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