import React, {useEffect, useRef, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import Item from "./Item";
import styles from "./ItemList.module.css"
import {fetchItems} from "./actions";
import {disableFilter} from "../PokemonList/actions";

const ItemList = () => {

    const { page, isLoading, itemsFiltered, filtering } = useSelector(state => state.items)
    const dispatch = useDispatch();

    const scrollRef = useRef(null);
    const actualPage = useRef({})

    actualPage.current = page

    const handleScroll = useCallback((entities, observer) => {
        const target = entities[0];
        if (target.isIntersecting && !isLoading && !filtering) {
            dispatch(fetchItems(actualPage.current))
        }
    }, [dispatch, isLoading, filtering])

    useEffect(() => {

        dispatch(disableFilter())

        let options = {
            root: null,
            rootMargin: "30px",
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

    const loadingStyle = { display: isLoading ? "block" : "none"};

    return (
        <div>
            <div className={styles.itemList}>
                { itemsFiltered.map( (item, index) => (
                    <Item key={index} image={item.name} name={item.name}/>
                )) }
            </div>
            <div ref={scrollRef}>
                <span style={loadingStyle}>Loading...</span>
            </div>
        </div>
    )
}

export { ItemList };