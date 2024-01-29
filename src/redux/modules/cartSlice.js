import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { item: [], totalQuantity: 0, cartChange: false },
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.item.find(
                (item) => item.id === newItem.id,
            );
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    description: newItem.description,
                    totalPrice: newItem.price,
                    quantity: 1,
                });
            } else {
                existingItem.totalPrice =
                    existingItem.totalPrice + existingItem.price;
                existingItem.quantity++;
            }
            state.totalQuantity++;
            state.cartChange = true;
        },

        removeCartItem: (state, action) => {
            const currentItem = action.payload;
            const targetItem = state.item.find(
                (item) => item.id === currentItem.id,
            );
            if (targetItem.quantity === 1) {
                targetItem.quantity--;
                state.item = state.item.filter((item) => item.quantity !== 0);
            }
            state.totalQuantity--;
            targetItem.quantity--;
            targetItem.totalPrice -= targetItem.price;
            state.cartChange = true;
        },
    },
});

export const { cartAction } = cartSlice.actions;
export default cartSlice;
