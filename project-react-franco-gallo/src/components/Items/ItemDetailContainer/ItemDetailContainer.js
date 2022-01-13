import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { extractProducts } from '../../../products'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [listProducts, setlistProducts] = useState({})

    const { idDetail } = useParams()

    useEffect(() => {
        extractProducts
            .then(answer => setlistProducts(answer.find(product => product.id === idDetail)))
    }, [idDetail])

    return (
        <>
            <ItemDetail item={listProducts}/>
        </>
    )
}

export default ItemDetailContainer
