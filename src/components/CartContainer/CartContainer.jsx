/* eslint-disable react/no-unescaped-entities */
// React imports
import { useState } from "react";

// Custom hooks and context
import { useCartContext } from "../context/CartContext";
import { useMyFormik } from "../../hooks/useMyFormik";
import { useOrderManager } from "../../hooks/useOrderManager";

// React Router
import { Link } from "react-router-dom";

// Bootstrap components imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component imports
import IDModal from "../Modals/IDModal/IDModal";
import FormModal from "../Modals/FormModal/FormModal";
import Summary from "./Summary/Summary";
import CartList from "./CartList/CartList";
import MyButton from "../Buttons/MyButton/MyButton";


const CartContainer = () => {
    const { cart, deleteCart, totalPrice, total, shipping } = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [showIdModal, setShowIdModal] = useState(false)

    const handleCheckout = (user) => {
        createOrder(user)
        setShowIdModal(true)
    }

    const { formik } = useMyFormik(handleCheckout, setShowForm)
    const { createOrder, orderID } = useOrderManager()


    return (
        < Container >
            <Container className="d-flex justify-content-between my-3">
                <h2 className="text-dark">Checkout</h2>
                <p>{cart.length} {cart.length > 1 ? 'items' : 'item'}</p>
            </Container>
            {
                cart.length > 0 ?
                    <>
                        <Row>
                            <Col s={12} lg={8}>
                                <CartList cart={cart} />
                                <Container className="d-flex justify-content-end align-items-baseline">
                                    <button
                                        className='no-style-btn text-dark mx-2 text-decoration-underline'
                                        onClick={deleteCart}>
                                        Empty Cart
                                    </button>
                                    <p> Subtotal: {totalPrice.toFixed(2)}€ </p>
                                </Container>

                            </Col>
                            <Col s={12} lg={4}>
                                <Summary
                                    totalPrice={totalPrice}
                                    shipping={shipping}
                                    setShowForm={setShowForm}
                                    total={total}

                                />
                            </Col>
                        </Row>
                        <FormModal
                            show={showForm}
                            handleClose={() => setShowForm(false)}
                            totalPrice={totalPrice}
                            formik={formik}
                        />

                        <IDModal
                            orderID={orderID}
                            show={showIdModal}
                            handleClose={() => setShowIdModal(false)}
                        />

                    </>
                    :
                    <Container className="d-flex flex-column justify-content-between align-items-center">
                        <p>You're cart is empty</p>
                        <Link to='/'>
                            <MyButton text='Go back' />
                        </Link>
                    </Container>
            }
        </Container >
    )
}



export default CartContainer