/* eslint-disable react/prop-types */
// Context import 
import { useCartContext } from "../../context/CartContext"

const Cart = ({ item }) => {
    const { deleteProduct } = useCartContext()
    const totalPerProduct = item.price * item.quantity

    return (

        <tr>
            <td colSpan={2}>
                <div className="d-lg-flex align-items-center">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        width={100}
                        className='d-none d-lg-block mx-2' />
                    <h5 className="mt-2">{item.name}</h5>
                </div>
            </td>
            <td>{item.quantity}</td>
            <td>{item.price}€</td>
            <td>{totalPerProduct}€</td>
            <td><button className="no-style-btn" onClick={() => deleteProduct(item.id)}>X</button></td>
        </tr>


    )
}

export default Cart