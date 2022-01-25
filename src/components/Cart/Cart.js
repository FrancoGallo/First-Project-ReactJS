import { useCartContext } from "./CartContext"


const Cart = () => {
    const { cartList, clearCart } = useCartContext()

    return (
        <section>
            <button onClick={clearCart}>Vaciar carro</button>
            {cartList.map(item => 
            <li key={item.id}>{item.name}: {item.price}</li>
            )}
        </section>
    )
}

export default Cart
