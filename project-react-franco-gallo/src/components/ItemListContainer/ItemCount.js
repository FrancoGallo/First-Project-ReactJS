import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {
    const [counter, setCounter] = useState (initial)

    const decrease = () => {
        counter > initial && setCounter (counter - 1)
    }

    const increase = () => {
        counter < stock ? setCounter (counter + 1) : alert ("Cantidad maxima del producto")
        {/* Esto es igual que hacer esto:

            if (counter < stock) {
                setCounter (counter + 1)
            }
            
            else {
                alert ("Cantidad maxima del producto")
            }

            Es un metodo mucho mas simplificado y comodo de usar el if.
            El "&&" solo lo usamos cuando tenemos un solo if pero, si tenes 2 opciones como es el caso de la funcion "increase",
            usamos el "?" como if y el ":" como else.
        */}
    }

    const reset = () => {
        setCounter (initial)
    }

    return (
        <div className='item-count'>
            <div className='item-count-amount'>
                <button onClick={decrease}>-</button> 
                <p>{counter}</p>
                <button onClick={increase}>+</button>
                {/* Si queres poner una funcion con parametros no es asi "funcion (parametro)", sino asi "() => funcion (parametro)" */}
            </div>

            <div className='item-count-buttons'>
                <button onClick={reset}>Reset</button>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
