import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import TitleLoadContainer from '../../TitleOfLoad/TitleLoadContainer';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [listProducts, setlistProducts] = useState({})
    const [load, setload] = useState(true)
    const { idDetail } = useParams()

    useEffect(() => { 
        const dataBase = getFirestore()
        const queryItem = doc(dataBase, 'products', idDetail)

        setTimeout(() => {
            getDoc(queryItem)
                .then(answer => {
                    setlistProducts({id: answer.id, ...answer.data()})
                })
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
