import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext) // Metodo por el cual te ahorras importar tantos useContext
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addItem(Item) {
        setCartList([...cartList, Item])
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