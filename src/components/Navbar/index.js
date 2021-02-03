import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

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
                <input type="text" placeholder="Search" className={styles.searchbar}/>
            </div>
        </nav>
    )
}

export default Navbar;