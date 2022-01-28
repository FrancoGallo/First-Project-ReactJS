import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext) // Metodo por el cual te ahorras importar tantos useContext
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem (item, counter) {
        // isInCart(item.id) ? sumarCantidad(item, counter) : setCartList([...cartList, {...item, counter}])
        if (isInCart(item.id)) {
            sumarCantidad(item, counter)
        }
        else {
            setCartList([...cartList, {...item, counter}])
        }
    }

    const isInCart = (id) => {
        const carrito = cartList.some((prod) => prod.id === id) // ".some" sirve para devolverte un booleano.
        return carrito
        // El "isInCart" esta para devolverte un booleano sobre si el producto ya esta o no en el carrito.
    }

    const sumarCantidad = (item, counter) => {
        const copiaCarrito = [...cartList]
        
        copiaCarrito.forEach((prod) => {
            prod.id === item.id && (prod.counter = prod.counter + counter)
            // En vez de hacer "(prod.cantidad = prod.cantidad + cantidad)" podes
            // hacer "(prod.cantidad += cantidad)" y es lo mismo
        })
    }

    function clearCart() {
        setCartList([])
    }

    const getTotalAmmount = () => {
        return cartList.reduce( (acumulador,item) =>  (item.price * item.counter + acumulador) ,0);
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,
            getTotalAmmount
        }}>
            {children}
        </CartContext.Provider>
    )
}