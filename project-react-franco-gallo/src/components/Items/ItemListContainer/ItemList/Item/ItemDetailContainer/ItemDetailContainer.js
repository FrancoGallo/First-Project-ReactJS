import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { extractProducts } from '../../../../../../products'

const ItemDetailContainer = () => {
    const [listProducts, setlistProducts] = useState({})

    useEffect(() => {
        extractProducts
            .then(answer => setlistProducts(answer.find(product => product.id === '1')))
    }, [])

    return (
        <>
            <ItemDetail item={listProducts}/>
        </>
    )
}

export default ItemDetailContainer
