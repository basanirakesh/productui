import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {productsReducer} from '../features/products/index';

import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer
    },
    middleware
});