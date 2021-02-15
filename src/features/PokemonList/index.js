import React, {useEffect, useRef, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Pokemon from './Pokemon';
import styles from './PokemonList.module.css'
import {fetchPokemons} from './actions';
import {disableFilter} from '../ItemList/actions';

const PokemonList = () => {

    const { page, isLoading, pokemonsFiltered, filtering } = useSelector(state => state.pokemon)
    const dispatch = useDispatch();

    const scrollRef = useRef(null);
    const actualPage = useRef({})

    actualPage.current = page

    const handleScroll = useCallback((entities, observer) => {
        const target = entities[0];
        if (target.isIntersecting && !isLoading && !filtering) {
            dispatch(fetchPokemons(actualPage.current))
        }
    }, [dispatch, isLoading, filtering])

    useEffect(() => {

        dispatch(disableFilter())

        let options = {
            root: null,
            rootMargin: '30px',
            threshold: 1.0
        }

        let observer = new IntersectionObserver(
            handleScroll,
            options
        );

        observer.observe(scrollRef.current);

        return (() => {
            observer.disconnect()
        })
    }, [dispatch, handleScroll])

    const loadingStyle = { display: isLoading ? 'block' : 'none'};

    return (
        <div>
            <div className={styles.pokemonList}>
                { pokemonsFiltered.map( (pokemon, index) => (
                    <Pokemon key={index} image={pokemon.url.match(/\d+/g)[1]} name={pokemon.name}/>
                )) }
            </div>
            <div ref={scrollRef}>
                <span style={loadingStyle}>Loading...</span>
            </div>
        </div>
    )
}

export { PokemonList };