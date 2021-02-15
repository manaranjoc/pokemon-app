import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './PokemonDetail.module.css';
import {closeDetail} from './actions';
import {addPokemonToComparison} from '../PokemonComparison/action';
import Chart from 'chart.js'


const PokemonDetail = () => {

    const {selectedPokemon} = useSelector(state => state.pokemonSelected);

    const dispatcher = useDispatch();

    const chart = useRef();

    useEffect(() => {
        if (selectedPokemon !== null) {
            const chartContext = chart.current.getContext('2d');
            new Chart(chartContext, {
                type: 'bar',
                data: {
                    labels: selectedPokemon.stats.map(stat => stat.stat.name),
                    datasets: [{
                        label: '',
                        data: selectedPokemon.stats.map(stat => stat.base_stat),
                        backgroundColor: selectedPokemon.color,
                    }]
                },
                options: {
                    legend: {display: false},
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
    }, [selectedPokemon])

    const closeModal = (event) => {
        if (event.target.id !== '') {
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
            <div className={styles.modalBackground} onClick={closeModal} id='background'>
                <div className={styles.modal}>
                    <div className={styles.header} style={{backgroundColor: selectedPokemon.color}}>
                        <h3 className={styles.name}>{selectedPokemon.name.toUpperCase()}</h3>
                        <button aria-label='Close' onClick={closeModal} id='close-button' className={styles.closeButton}>
                            <span aria-hidden='true' id='close-button'>x</span>
                        </button>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name} className={styles.pokemonImage}/>
                        <div>
                            <div>
                                {selectedPokemon.description}
                            </div>
                            <hr className={styles.separator}/>
                            <div className={styles.characteristicsContainer}>
                                <div className={styles.characteristics}>
                                    <h4 className={styles.characteristicsTitle}>Height</h4>
                                    <p className={styles.characteristicsText}>
                                        {selectedPokemon.height} m
                                    </p>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4 className={styles.characteristicsTitle}>Weight</h4>
                                    <p className={styles.characteristicsText}>
                                        {selectedPokemon.weight} kg
                                    </p>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4 className={styles.characteristicsTitle}>Abilities</h4>
                                    <ul className={styles.characteristicsList}>
                                        {selectedPokemon.abilities.map((ability) => {
                                            return (<li key={ability.slot}>{ability.ability.name}</li>)
                                        })}
                                    </ul>
                                </div>
                                <div className={styles.characteristics}>
                                    <h4 className={styles.characteristicsTitle}>Type</h4>
                                    <ul className={styles.characteristicsList}>
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
                    <hr className={styles.separator}/>
                    <canvas ref={chart} width='100%' height='30vh'></canvas>
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

export { PokemonDetail };