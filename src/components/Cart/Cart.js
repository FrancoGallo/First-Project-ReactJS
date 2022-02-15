import { useCartContext } from "./CartContext" // Forma en el que importas tu Context.
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import CartItem from "./CartItem"
import { useState } from "react"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cartList, getTotalAmmount, clearCart } = useCartContext() // Forma en el que usas tu Context. Podes traerte solo lo que vas a usar.
    const [orderSummary, setOrderSummary] = useState(false)
    const [load, setload] = useState()
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const buyOrder = async (e) => {
        e.preventDefault()
        let order = {}

        order.buyer = form

        order.total = (getTotalAmmount()).toFixed(2)

        order.items = cartList.map(prod => {
            const id = prod.id
            const name = prod.name
            const price = (prod.price * prod.counter).toFixed(2)
            const amount = prod.counter

            return {id, name, price, amount}
        })

        // Orden generada en Firestone
        const dataBase = getFirestore()
        const orderCollection = collection(dataBase, 'orders')

        await addDoc(orderCollection, order)
        .then(answer => setOrderSummary(answer.id))
        .finally(() => setload(true))

        // Para reducir el stock en Firestone cuando usan el Cart
        const queryCollection = collection(dataBase, 'products')
        const queryCollectionStock = query(
            queryCollection, where(documentId(), 'in', cartList.map(items => items.id))
        )
        const batch = writeBatch(dataBase)

        await getDocs(queryCollectionStock)
        .then(answer => answer.docs.forEach(answer2 => batch.update(answer2.ref, {
            stock: answer2.data().stock - cartList.find(item => item.id === answer2.id).counter
        })))
        batch.commit()
    }

    function formChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {
                load 
                    ?
                        <>
                            <i>Tu numero de orden es: {orderSummary}</i>
                            <button><Link to={'/'}>Volver al inicio</Link></button>
                        </>
                    :
                        <>
                            <section className="cart">
                                <button onClick={clearCart}>Vaciar carro</button>
                                <CartItem/>
                                <h4>Precio total: {(getTotalAmmount()).toFixed(2)}</h4>
                            </section>

                            <section>
                                <form onSubmit={buyOrder}>
                                    <input onChange={formChange} value={form.name} type='text' name='name' placeholder='Nombre'/><br/>
                                    <input onChange={formChange} value={form.lastName} type='text' name='lastName' placeholder='Apellido'/><br/>
                                    <input onChange={formChange} value={form.email} type='text' name='email' placeholder='Mail'/><br/>
                                    <input onChange={formChange} value={form.phone} type='text' name='phone' placeholder='Tel.'/><br/>
                                    <button>Confirmar compra</button>
                                </form>
                            </section>
                        </>
            }
        </>
    )
}

export default Cart