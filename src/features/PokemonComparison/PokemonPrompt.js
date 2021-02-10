import React from "react";
import {useSelector} from "react-redux";
import style from "./PokemonPrompt.module.css"


export function PokemonPrompt() {

    const {comparisonPokemons} = useSelector(state => state.pokemonComparison);

    let modal = null;

    if (comparisonPokemons.length === 1) {
        modal = (
            <div className={style.modal}>
                <h5 className={style.modalTitle}>Comparing pokemon</h5>
                <hr/>
                <h6 className={style.modalSubtitle}>{comparisonPokemons[0].name.toUpperCase()}</h6>
            </div>
        )
    } else {
        modal = null;
    }

    return (
        <React.Fragment>
            {modal}
        </React.Fragment>
    )
}