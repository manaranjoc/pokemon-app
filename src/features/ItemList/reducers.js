import {createReducer} from '@reduxjs/toolkit';
import {disableFilter, fetchItems, filterItems} from './actions';

const initialState = {
    items: [],
    itemsFiltered: [],
    page: 0,
    isLoading: false,
    filtering: false,
}

const itemsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.items = [...new Set([...state.items, ...action.payload])];
            state.itemsFiltered = state.items;
            state.isLoading = false;
            state.page += 1;
        })
        .addCase(fetchItems.pending, (state, actions ) => {
            state.isLoading = true;
        })
        .addCase(filterItems, (state, action) => {
            if (action.payload.filterBy === null || action.payload.filterBy === '') {
                state.filtering = false;
            } else {
                state.filtering = true;
            }
            state.itemsFiltered = state.items.filter((item) => item.name.includes(action.payload.filterBy))
        })
        .addCase(disableFilter, (state, actions) => {
            state.filtering = false;
        })
})

export default itemsReducer;