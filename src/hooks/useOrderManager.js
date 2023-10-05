import { useState } from "react";
import { useCartContext } from "../components/context/CartContext";
import { getFirestore, addDoc, collection, doc, updateDoc } from "firebase/firestore";

export const useOrderManager = () => {
    const [orderID, setOrderID] = useState('')
    const { totalPrice, cart } = useCartContext()
    const createOrder = (user) => {
        const order = {}
        order.buyer = user
        order.products = cart.map(product => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
                name: product.name,
                stock: product.stock
            }
        })
        order.total = totalPrice
        addOrder(order)
        updateStock(order)
    }

    const updateStock = (order) => {
        const productsToUpdate = order.products.map((product) => (
            { id: product.id, stock: product.stock -= product.quantity }
        ));
        const queryDB = getFirestore()
        productsToUpdate.forEach(product => {
            const queryUpdateProduct = doc(queryDB, 'Products', product.id)
            updateDoc(queryUpdateProduct, { stock: product.stock })
                .then(() => console.log('Stock updated'))
                .catch((err) => console.log(err))
        })
    }

    const addOrder = (order) => {
        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders',)
        addDoc(ordersCollection, order)
            .then(({ id }) => setOrderID(id))
            .catch((err) => console.log(err))
    }

    return { createOrder, orderID }
}