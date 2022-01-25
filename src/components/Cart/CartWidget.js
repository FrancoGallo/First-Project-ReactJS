import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <Link to={'/cart'}><span><i><BsCartFill/></i></span>Carrito</Link>
    )
}



