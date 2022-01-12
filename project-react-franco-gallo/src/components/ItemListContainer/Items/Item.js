import React from 'react'
import ItemCount from './ItemCount'
import { Button } from 'react-bootstrap' // Esta es la forma de importar un componente de boostrap en react.
import './Item.css'

const Item = ({ item }) => {
    let initial = 0

    item.stock >= 1 ? initial=1 : initial=0
    
    return (
        <section className='Item list-group list-group-horizontal'>
            <div className='list-group-item wholeItem'>
                <h4>{item.name}</h4>
                <img src={item.img} alt={item.name}/>
                <Button variant="outline-dark">Más sobre el producto</Button>
                <h6>Precio: $U {item.price}</h6> <h6>Stock: {item.stock}</h6>
                <ItemCount initial={initial} stock={item.stock}/>
            </div>
        </section>
    )
}

export default Item
