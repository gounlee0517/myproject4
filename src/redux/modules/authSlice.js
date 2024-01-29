import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: false };

const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState,
    reducers: {
        login: (state, action) => {
            return { isLoggedIn: action.payload };
        },
    },
});

export default isLoggedInSlice.reducer;
export const { login } = isLoggedInSlice.actions;
