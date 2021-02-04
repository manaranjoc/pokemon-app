import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import {PokemonList} from "./features/PokemonList";
import {PokemonDetail} from "./features/PokemonDetail";

function App() {
    return (
        <Router>
            <Navbar/>
            <PokemonList/>
            <PokemonDetail/>
        </Router>
    );
}

export default App;
