import React from 'react';
import { useCartContext } from './CartContext';
import './CartItem.css'

const CartItem = () => {
    const { cartList, deleteItem } = useCartContext()

    return (
        <>
            {cartList.map(item => 
                <div className='cart-item' key={item.id}>
                    <img src={item.img1} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <div>
                        <h4>Cantidad: {item.counter}</h4>
                        <h4>Precio: U$ {item.counter * item.price}</h4>
                    </div>
                    
                    <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>Eliminar</button>
                </div>
            )}
        </>
    )
};

export default CartItem;
