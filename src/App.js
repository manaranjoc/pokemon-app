import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import {PokemonList} from "./features/PokemonList";
import {PokemonDetail} from "./features/PokemonDetail";
import {PokemonComparison} from "./features/PokemonComparison";

function App() {
    return (
        <Router>
            <Navbar/>
            <PokemonList/>
            <PokemonDetail/>
            <PokemonComparison/>
        </Router>
    );
}

export default App;
