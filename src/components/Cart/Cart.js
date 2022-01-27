import { useCartContext } from "./CartContext" // Forma en el que importas tu Context.
import './Cart.css'

const Cart = () => {
    const { cartList, clearCart } = useCartContext() // Forma en el que usas tu Context. Podes traerte solo lo que vas a usar.

    return (
        cartList.map((item) => {
            const nuevoPrecio = item.price * item.counter
        
            return (
                <section className="cart">
                    <button onClick={clearCart}>Vaciar carro</button>
                    <div className="cart" key={item.id}>
                    <h4>{item.name}</h4>
                    <h4>{nuevoPrecio}</h4>
                    <h4>Cantidad: {item.counter}</h4>
                    <div>
                        <button>.  -  .</button>
                        <button>.  +  .</button>
                    </div>
                    <button>Borrar producto del carrito</button>
                    </div>
                    <h4>Precio total:</h4>
                </section>
            )
        })
    )
    

    
}

export default Cart
