import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {productsReducer} from '../features/products/index';

import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer: {
        products: productsReducer
    },
    middleware
});