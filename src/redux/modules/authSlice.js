import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false };

const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState,
    reducers: {
        login: (state, action) => {
            return { ...state, isLoggedIn: true };
        },
        logout: (state, action) => {
            return { ...state, isLoggedIn: false };
        },
    },
});

export default isLoggedInSlice.reducer;
export const { login, logout } = isLoggedInSlice.actions;
