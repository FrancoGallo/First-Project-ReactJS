import './ItemDetail.css'
import React, { useState } from 'react'
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ItemDetail = ({ item }) => {
    let initial = 1

    const [changeButtons, setChangeButtons] = useState(true)

    const onAdd = (counter) => {
        setChangeButtons(false)
        console.log(`${counter}`)
    }

    return (
        <section className='Item list-group list-group-horizontal'>
            <div className='list-group-item wholeItem'>
                <h4>{item.name}</h4>
                <img src={item.img} alt={item.name}/>
                <div className='item-price-stock'>
                    <h6>Precio: $U {item.price}</h6> 
                    <h6>Stock: {item.stock}</h6>
                </div>
                {changeButtons 
                ? <ItemCount initial={initial} stock={item.stock} onAdd={onAdd}/> 
                : <div>
                    <Link to={'/'}><Button variant="info">Volver al inicio</Button></Link>
                    <Link to={'/cart'}><Button variant="success">Finalizar compra</Button></Link>  
                 </div>}
            </div>
        </section>
    )
}

export default ItemDetail
