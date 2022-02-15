import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

export const CartWidget = () => {
    const { counterInCart } = useCartContext()

    return (
        <Link to={'/cart'}><span><i><BsCartFill/>{counterInCart()}</i></span>Carrito</Link>
    )
}



