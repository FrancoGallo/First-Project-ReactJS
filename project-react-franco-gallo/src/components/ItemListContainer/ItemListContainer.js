import React, { useState, useEffect } from 'react'; // Para traer las funciones useEffect y useState.
import { extractProducts } from '../../products' // Llama a la array de productos.
import ItemList from './Items/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [listProducts, setlistProducts] = useState([])

    const [load, setload] = useState(true) // Lo usas para el if de H2 "Cargando..." que esta mas abajo.

    useEffect(() => {
        extractProducts
            .then((answer) => {
                setlistProducts(answer)
            })
            .finally(() => {
                setload(false)
            })
    }, [])

    return (
        <article className='ItemListContainer'>
            {load
            ?
            <h2>Cargando...</h2>
            :
            <ItemList items={listProducts}/>
            }
        </article>
    )
}

export default ItemListContainer


