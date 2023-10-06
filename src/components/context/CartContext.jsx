/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// React imports
import { createContext } from 'react'
import { useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newItem) => {
        const index = cart.findIndex((i) => i.id === newItem.id)
        if (index !== -1) {
            cart[index].quantity += newItem.quantity
            setCart([...cart]);
        } else {
            setCart([...cart, newItem]);
        }
    }

    const totalQuantity = cart.reduce((acc, prod) => acc += prod.quantity, 0)

    const totalPrice = cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)

    const shipping = totalPrice > 80 ? 0 : 7.99

    const total = (shipping + totalPrice)

    const deleteProduct = id => setCart(cart.filter((i) => i.id !== id))

    const deleteCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteCart,
            totalQuantity,
            totalPrice,
            deleteProduct,
            total,
            shipping
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;