/* eslint-disable react/prop-types */
// Boostrap imports
import Table from 'react-bootstrap/Table'

// Component imports
import Cart from "../Cart/Cart"

const CartList = ({ cart }) => {
    return (
        <Table hover className='text-center align-middle'>
            <thead>
                <tr>
                    <th colSpan={2}>Products</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => <Cart key={item.id} item={item} />)}
            </tbody>
        </Table>
    )
}

export default CartList