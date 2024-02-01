import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [
        {
            id: 1,
            name: 'vitamin',
            count: 1,
        },
        {
            id: 2,
            name: 'mineral',
            count: 1,
        },
    ],
    reducers: {
        addCount(state, action) {
            let num = state.findIndex((item) => item.id === action.payload);
            state[num].count++;
        },
        minusCount(state, action) {
            let num = state.findIndex((item) => item.id === action.payload);
            if (state[num].count > 1) {
                state[num].count--;
            }
        },
        addCart(state, action) {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(
                (item) => item.id === newItem.id,
            );

            if (existingItemIndex === -1) {
                state.push({
                    url: newItem.url,
                    name: newItem.name,
                    count: 1,
                    price: newItem.price,
                });
            } else {
                state[existingItemIndex] = {
                    ...state[existingItemIndex],
                    count: state[existingItemIndex].count + 1,
                };
            }
        },
        deleteCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addCount, minusCount, addCart, deleteCart } = cartSlice.actions;
export default cartSlice;
