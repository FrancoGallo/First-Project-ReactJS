import './Item.css'
import React from 'react'
// import ItemCount from './ItemCount'
import { Button } from 'react-bootstrap' // Esta es la forma de importar un componente de boostrap en react.
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    // let initial = 0

    // item.stock >= 1 ? initial=1 : initial=0

    return (
        <section className='Item list-group list-group-horizontal'>
            <div className='list-group-item wholeItem'>
                <h4>{item.name}</h4>
                <img src={item.img1} alt={item.name}/>
                <Link to={`/detail/${item.id}`}>
                    <Button variant="outline-dark">Más sobre el producto</Button>
                </Link>
                <div className='item-price-stock'>
                    <h6>Precio: $U {item.price}</h6> 
                    <h6>Stock: <span className={(item.stock >= 1) ? 'with-stock' : 'out-of-stock'}>{item.stock}</span></h6>
                </div>
                {/* <ItemCount initial={initial} stock={item.stock}/> */}
            </div>
        </section>
    )
}

export default Item
