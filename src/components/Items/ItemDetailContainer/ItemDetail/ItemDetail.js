import './ItemDetail.css'
import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <section className='Item list-group list-group-horizontal'>
            <div className='list-group-item wholeItem'>
                <h4>{item.name}</h4>
                <img src={item.img} alt={item.name}/>
                <h5>Precio: $U {item.price}</h5>
                <h2>Detalles del producto aqui</h2>
            </div>
        </section>
    )
}

export default ItemDetail
