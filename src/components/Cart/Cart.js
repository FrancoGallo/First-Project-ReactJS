import { useCartContext } from "./CartContext" // Forma en el que importas tu Context.
import './Cart.css'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import CartItem from "./CartItem"
import { useState } from "react"


const Cart = () => {
    const { cartList, getTotalAmmount, clearCart } = useCartContext() // Forma en el que usas tu Context. Podes traerte solo lo que vas a usar.
    const [orderSummary, setOrderSummary] = useState(false)
    const [load, setload] = useState()

    const buyOrder = async () => {
        let order = {}

        order.comprador = {
            name: 'franco',
            lastName: 'gallo',
            email: 'pepe@gmail.com',
            phone: '12345678'
        }

        order.total = (getTotalAmmount()).toFixed(2)

        order.items = cartList.map(prod => {
            const id = prod.id
            const name = prod.name
            const price = (prod.price * prod.counter).toFixed(2)
            const amount = prod.counter

            return {id, name, price, amount}
        })

        const dataBase = getFirestore()
        const orderCollection = collection(dataBase, 'orders')

        await addDoc(orderCollection, order)
        .then(answer => setOrderSummary(answer.id))
        .finally(() => setload(true))
    }

    return (
        <>
            {
                load 
                    ?
                        <i>Tu numero de orden es: {orderSummary}</i>
                    :
                        <section className="cart">
                            <button onClick={clearCart}>Vaciar carro</button>
                            <button onClick={buyOrder}>Generar orden</button>
                            <CartItem/>
                            <h4>Precio total: {(getTotalAmmount()).toFixed(2)}</h4>
                        </section>
            }
        </>
    )
}

export default Cart