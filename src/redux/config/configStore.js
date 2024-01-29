import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../modules/authSlice';
import cartSlice from '../modules/cartSlice';

const store = configureStore({
    reducer: {
        authSlice,
        cartSlice,
    },
});

export default store;
