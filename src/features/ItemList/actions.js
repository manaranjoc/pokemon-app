import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getItems} from "../../API/itemAPI";

export const fetchItems = createAsyncThunk(
    'items/fetch',
    async (page, thunkAPI) => {
        const response = await getItems(page)
        return response.data.results
    }
);

export const filterItems = createAction('items/filter', (filterBy) => {
    return {
        payload: {
            filterBy
        }
    }
});

export const disableFilter = createAction('items/disableFilter');