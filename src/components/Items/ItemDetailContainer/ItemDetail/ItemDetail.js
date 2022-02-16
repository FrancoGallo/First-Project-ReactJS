import './ItemDetail.css'
import React, { useState } from 'react'
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../../Cart/CartContext'

const ItemDetail = ({ item }) => {
    let initial = 1

    const [changeButtons, setChangeButtons] = useState(true)

    const onAdd = (counter) => {
        setChangeButtons(false)
        addItem(item, counter)
    }

    const { addItem } = useCartContext()

    return (
        <section className='item-detail-container'>
            <div>
                <img src={item.img1} alt={item.name}/>
            </div>
            <div>
                <h3>Precio: $U {item.price}</h3>
                {
                    (item.stock >= 1) 
                        ? <h4 className='with-stock'>Con stock</h4> 
                        : <h4 className='out-of-stock'>Sin stock</h4>
                }
                {changeButtons 
                    ? <ItemCount initial={initial} stock={item.stock} onAdd={onAdd}/> 
                    : <>
                        <Link to={'/'}><Button variant="info">Volver al inicio</Button></Link>
                        <Link to={'/cart'}><Button variant="success">Finalizar compra</Button></Link>  
                    </>}
            </div>
        </section>
    )
}

export default ItemDetail