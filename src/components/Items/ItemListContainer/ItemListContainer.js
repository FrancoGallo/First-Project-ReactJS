import './ItemListContainer.css';
import React, { useState, useEffect } from 'react'; // Para traer las funciones useEffect y useState.
import { extractProducts } from '../../../products' // Llama a la array de productos.
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import TitleLoadContainer from '../../TitleOfLoad/TitleLoadContainer';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [listProducts, setlistProducts] = useState([])

    const [load, setload] = useState(true) // Lo usas para para la barra de carga que esta mas abajo como "TitleLoadContainer".

    const { idTag } = useParams()

    useEffect(() => {
        const fb = getFirestore()
        const queryCollection = query(collection(fb, 'products'), where('tag', '==', 'corsair'))

        if (idTag) {
            getDocs(queryCollection)
            .then((answer) => {
                setlistProducts(answer.docs.map(prod => ({id: prod.id, ...prod.data()})))
            })
            .finally(() => {
                setload(false)
            })
        } 
        else {
            getDocs(queryCollection)
            .then((answer) => {
                setlistProducts(answer.docs.map(prod => ({id: prod.id, ...prod.data()})))
            })
            .finally(() => {
                setload(false)
            })
        }
    }, [idTag])

    return (
        <article className='ItemListContainer'>
            {load
            ?
            <TitleLoadContainer/>
            :
            <ItemList items={listProducts}/>
            }
        </article>
    )
}

export default ItemListContainer


