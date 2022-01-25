import './ItemListContainer.css';
import React, { useState, useEffect } from 'react'; // Para traer las funciones useEffect y useState.
import { extractProducts } from '../../../products' // Llama a la array de productos.
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import TitleLoadContainer from '../../TitleOfLoad/TitleLoadContainer';

const ItemListContainer = () => {
    const [listProducts, setlistProducts] = useState([])

    const [load, setload] = useState(true) // Lo usas para para la barra de carga que esta mas abajo como "TitleLoadContainer".

    const { idMarca } = useParams()

    useEffect(() => {
        if (idMarca) {
            extractProducts
            .then((answer) => {
                setlistProducts(answer.filter(product => product.marca === idMarca))
            })
            .finally(() => {
                setload(false)
            })
        } 
        else {
            extractProducts
            .then((answer) => {
                setlistProducts(answer)
            })
            .finally(() => {
                setload(false)
            })
        }
    }, [idMarca])

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


