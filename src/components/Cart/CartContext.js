import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext) // Metodo por el cual te ahorras importar tantos useContext
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem (item, counter) {
        isInCart(item.id) ? addCounter(item, counter) : setCartList([...cartList, {...item, counter}])
    }

    const isInCart = (id) => {
        const cart = cartList.some((prod) => prod.id === id) // ".some" sirve para devolverte un booleano.
        return cart
        // El "isInCart" esta para devolverte un booleano sobre si el producto ya esta o no en el carrito.
    }

    const addCounter = (item, counter) => {
        const copyCart = [...cartList]
        
        copyCart.forEach((prod) => {
            prod.id === item.id && (prod.counter += counter)
            // Poner "(prod.counter += counter)" es igual que poner "(prod.counter = prod.counter + counter)".
        })
    }

    const deleteItem = (id) => {
        return setCartList(cartList.filter(prod => prod.id !== id)) 
    }

    function clearCart() {
        setCartList([])
    }

    const getTotalAmmount = () => {
        return cartList.reduce( (accumulator, item) =>  (item.price * item.counter + accumulator) ,0)
    }

    const counterInCart = () => {
        return cartList.reduce( (accumulator, item) =>  (item.counter + accumulator) ,0)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            getTotalAmmount,
            deleteItem,
            clearCart,
            counterInCart  
        }}>
            {children}
        </CartContext.Provider>
    )
}