import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {PokemonList} from './features/PokemonList';
import {PokemonDetail} from './features/PokemonDetail';
import {PokemonComparison} from './features/PokemonComparison';
import {ItemList} from './features/ItemList';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Route path='/' exact>
                <PokemonList/>
                <PokemonDetail/>
                <PokemonComparison/>
            </Route>
            <Route path='/items'>
                <ItemList/>
            </Route>
        </Router>
    );
};

export default App;
