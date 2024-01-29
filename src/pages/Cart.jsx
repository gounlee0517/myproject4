import React from 'react';
import CartList from '../components/CartList';
import CartItem from '../components/CartItem';
import CartPrice from '../components/CartPrice';

function Cart() {
    return (
        <>
            <CartList />
            <CartItem />
            <CartPrice />
        </>
    );
}

export default Cart;
