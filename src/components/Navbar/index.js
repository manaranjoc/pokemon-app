import {NavLink, Route} from "react-router-dom";
import styles from "./Navbar.module.css";
import {useDispatch} from "react-redux";
import {filterPokemons} from "../../features/PokemonList/actions";
import {useRef} from "react";
import {filterItems} from "../../features/ItemList/actions";

function Navbar() {

    const dispatch = useDispatch();

    const inputFilterPokemons = useRef(null);
    const inputFilterItems = useRef(null);

    const filterPokemonsInput = () => {
        dispatch(filterPokemons(inputFilterPokemons.current.value))
    }

    const filterItemsInput = () => {
        dispatch(filterItems(inputFilterItems.current.value))
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.linksContainer}>
                <h3 className={styles.title}>PokéApp</h3>
                <ul className={styles.links}>
                    <li className={styles.linkContainer}>
                        <NavLink to="/" activeClassName={styles.navActive} className={styles.link} exact>
                            Pokemons
                        </NavLink>
                    </li>
                    <li className={styles.linkContainer}>
                        <NavLink to='/items' activeClassName={styles.navActive} className={styles.link}>Items</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Route path='/' exact>
                    <input ref={inputFilterPokemons} type="text" placeholder="Search" className={styles.searchbar} onChange={filterPokemonsInput}/>
                </Route>
                <Route path='/items'>
                    <input ref={inputFilterItems} type="text" placeholder="Search" className={styles.searchbar} onChange={filterItemsInput}/>
                </Route>
            </div>
        </nav>
    )
}

export default Navbar;