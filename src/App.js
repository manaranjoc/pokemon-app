import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux"
import Navbar from "./components/Navbar";
import store from "./store";
import {PokemonList} from "./features/PokemonList";

function App() {
    return (
        <Router>
            <Navbar/>
            <PokemonList/>

        </Router>
    );
}

export default App;
