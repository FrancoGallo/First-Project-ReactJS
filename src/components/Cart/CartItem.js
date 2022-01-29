import React from 'react';
import { useCartContext } from './CartContext';

const CartItem = () => {
    const { cartList, deleteItem } = useCartContext()

    return (
        <>
            {cartList.map(item => 
                <div className="cart" key={item.id}>
                    <img src={item.img1} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <h4>Cantidad: {item.counter}</h4>
                    <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                </div>
            )}
        </>
    )
};

export default CartItem;
