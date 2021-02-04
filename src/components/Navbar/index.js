import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {useDispatch} from "react-redux";
import {filterPokemons} from "../../features/PokemonList/actions";
import {useRef} from "react";

function Navbar() {

    const dispatch = useDispatch();

    const inputFilter = useRef(null)

    const filter = () => {
        dispatch(filterPokemons(inputFilter.current.value))
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.linksContainer}>
                <h3 className={styles.title}>PokéApp</h3>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link to="/">Pokemons</Link>
                    </li>
                </ul>
            </div>
            <div>
                <input ref={inputFilter} type="text" placeholder="Search" className={styles.searchbar} onChange={filter}/>
            </div>
        </nav>
    )
}

export default Navbar;