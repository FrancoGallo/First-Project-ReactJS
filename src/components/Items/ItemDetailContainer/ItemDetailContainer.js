import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { extractProducts } from '../../../products'
import { useParams } from 'react-router-dom';
import TitleLoadContainer from '../../TitleOfLoad/TitleLoadContainer';

const ItemDetailContainer = () => {
    const [listProducts, setlistProducts] = useState({})

    const [load, setload] = useState(true)

    const { idDetail } = useParams()

    useEffect(() => { 
        setTimeout(() => {
            extractProducts
                .then(answer => setlistProducts(answer.find(product => product.id === idDetail)))
                .finally(() => {
                    setload(false)
                })
        }, 2000)
    }, [idDetail])

    return (
        <>
            {load
            ?
            <TitleLoadContainer/>
            :
            <ItemDetail item={listProducts}/>
            }
        </>
    )
}

export default ItemDetailContainer
