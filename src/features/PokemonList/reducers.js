const initialState = {
    pokemons: [
        {
            name: "BULBASAUR",
            image: "https://via.placeholder.com/150",
        }
    ]
}

function pokemonReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default pokemonReducer;