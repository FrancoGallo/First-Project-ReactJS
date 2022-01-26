import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext) // Metodo por el cual te ahorras importar tantos useContext
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem(item, cantidad) {
        // isInCart(item.id) ? sumarCantidad(item, counter) : setCartList([...cartList, {...item, counter}])
        if (isInCart(item.id)) {
            // sumarCantidad(item, cantidad)
            console.log(cantidad)
        }
        else {
            setCartList([...cartList, {...item, cantidad}])
        }
    }

    const isInCart = (id) => {
        const carrito = cartList.some((prod) => prod.id === id) // ".some" sirve para devolverte un booleano.
        return carrito
    }

    const sumarCantidad = (item, cantidad) => {
        const copiaCarrito = [...cartList]
        
        copiaCarrito.forEach((producto) => {
            producto.id === item.id && (producto.cantidad = producto.cantidad + cantidad)
            // En vez de hacer "(producto.cantidad = producto.cantidad + cantidad)" podes
            // hacer "(producto.cantidad += cantidad)" y es lo mismo
        })
    }

    function clearCart() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}