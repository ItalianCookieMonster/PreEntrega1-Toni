//Context imports
import { useCartContext } from '../context/CartContext';

//Bootstrap imports
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

//CSS imports
import './CartWidget.css'


const CartWidget = () => {
    const { totalQuantity } = useCartContext()

    return (
            <Button className="btn btn-dark btn-cart">
                <i className="bi bi-basket"></i>
                <Badge bg="secondary">{totalQuantity}</Badge>
            </Button>
    )
}

export default CartWidget