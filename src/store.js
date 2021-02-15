import {configureStore} from '@reduxjs/toolkit';
import pokemonReducer from './features/PokemonList/reducers';
import pokemonDetailReducer from './features/PokemonDetail/reducers';
import pokemonComparisonReducer from './features/PokemonComparison/reducers';
import itemsReducer from './features/ItemList/reducers'


const reducer = {
  pokemon: pokemonReducer,
  pokemonSelected: pokemonDetailReducer,
  pokemonComparison: pokemonComparisonReducer,
  items: itemsReducer,
}

const store = configureStore({reducer})

export default store;
