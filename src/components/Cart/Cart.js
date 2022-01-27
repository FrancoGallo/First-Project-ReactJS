import { useCartContext } from "./CartContext" // Forma en el que importas tu Context.
import './Cart.css'


const Cart = () => {
    const { cartList, clearCart, getTotalAmmount } = useCartContext() // Forma en el que usas tu Context. Podes traerte solo lo que vas a usar.

    return (
        <section className="cart">
            <button onClick={clearCart}>Vaciar carro</button>
            {cartList.map(item => 
            <div className="cart" key={item.id}>
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
                <h4>Cantidad: {item.counter}</h4>
                <div>
                    <button>.  -  .</button>
                    <button>.  +  .</button>
                </div>
            </div>
            )}
            <h4>Precio total: {getTotalAmmount()}</h4>
        </section>
    )
}

export default Cart