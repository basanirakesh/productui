import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";

export const selector = state => state.products;

export const fetchUserProducts = createAsyncThunk(
    'user/fetchProducts',
    async (userId, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        return response.json();
    }
);

export const productsReducer = createReducer({loading: false, entities: []}, {
    [fetchUserProducts.fulfilled]: (state) => {
        state.loading = true;
    },
    [fetchUserProducts.fulfilled]: (state, action) => {
        state.loading = false;
        state.entities = action.payload;
    },
    [fetchUserProducts.rejected]: (state) => {
        state.loading = false;
    },
})
