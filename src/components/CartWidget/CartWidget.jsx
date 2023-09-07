import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import './CartWidget.css'


const CartWidget = () => {
    return (
        <Button className="btn btn-dark btn-cart">
        <i className="bi bi-basket"></i>
        <Badge bg="secondary">0</Badge>
        </Button>
    )
}

export default CartWidget