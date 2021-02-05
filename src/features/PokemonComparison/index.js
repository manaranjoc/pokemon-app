import styles from "./PokemonComparison.module.css";
import {useDispatch, useSelector} from "react-redux";
import {closeComparisonPokemons} from "./action";
import {PokemonPrompt} from "./PokemonPrompt";
import React, {useEffect, useRef} from "react";
import Chart from "chart.js";
import Color from "color"


export function PokemonComparison() {

    const {comparisonPokemons} = useSelector(state => state.pokemonComparison);

    const dispatcher = useDispatch()

    const chart = useRef();

    useEffect(() => {
        if (comparisonPokemons.length === 2) {
            const ctx = chart.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: comparisonPokemons[0].stats.map(stat => stat.stat.name),
                    datasets: [{
                            label: comparisonPokemons[0].name,
                            data: comparisonPokemons[0].stats.map(stat => stat.base_stat),
                            backgroundColor: comparisonPokemons[0].color,
                        },
                        {
                            label: comparisonPokemons[1].name,
                            data: comparisonPokemons[1].stats.map(stat => stat.base_stat),
                            backgroundColor: Color(comparisonPokemons[1].color).alpha(0.5).string(),
                        },
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })

        }
    }, [comparisonPokemons])

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
                    <canvas ref={chart} width="100%" height="30vh"></canvas>

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