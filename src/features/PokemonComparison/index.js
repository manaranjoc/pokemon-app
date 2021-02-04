import styles from "./PokemonComparison.module.css";
import {useDispatch, useSelector} from "react-redux";
import {closeComparisonPokemons} from "./action";
import {PokemonPrompt} from "./PokemonPrompt";


export function PokemonComparison() {

    const {comparisonPokemons} = useSelector(state => state.pokemonComparison);

    const dispatcher = useDispatch()

    const closeComparison = (e) => {
        if (e.target.id !== '') {
            dispatcher(closeComparisonPokemons())
        }
    }

    let content = null;

    if (comparisonPokemons.length === 2) {
        content = (
            <div className={styles.modalBackground} onClick={closeComparison} id="background">
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h3 className={styles.name}>
                            {`${comparisonPokemons[0].name.toUpperCase()} VS. ${comparisonPokemons[1].name.toUpperCase()}`}
                        </h3>
                        <button aria-label="Close" onClick={closeComparison} id="close-button"
                                className={styles.closeButton}>
                            <span aria-hidden="true" id="close-button">x</span>
                        </button>
                    </div>
                    <hr/>
                    <div className={styles.imagesContent}>
                        <img src={comparisonPokemons[0].image} alt={comparisonPokemons[0].name}
                             className={styles.pokemonImage}/>
                        <img src={comparisonPokemons[1].image} alt={comparisonPokemons[1].name}
                             className={styles.pokemonImage}/>
                    </div>
                    <hr/>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.characteristics}>
                            <p>
                                {comparisonPokemons[0].height} m
                            </p>
                            <p>
                                {comparisonPokemons[0].weight} kg
                            </p>
                            {comparisonPokemons[0].abilities.map((ability) => {
                               return (<p key={ability.slot}>{ability.ability.name}</p>)
                            })}
                        </div>
                        <div className={styles.characteristics}>
                            <h4>Height</h4>
                            <h4>Weight</h4>
                            <h4>Abilities</h4>
                        </div>
                        <div className={styles.characteristics}>
                            <p>
                                {comparisonPokemons[1].height} m
                            </p>
                            <p>
                                {comparisonPokemons[1].weight} kg
                            </p>
                            {comparisonPokemons[1].abilities.map((ability) => {
                                return (<p key={ability.slot}>{ability.ability.name}</p>)
                            })}
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
            <PokemonPrompt/>
        </div>
    )
}