/* eslint-disable react/prop-types */
import ItemCount from '../../ItemCount/ItemCount'
import AddToCartButtons from '../../AddToCartButtons/AddToCartButtons';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const ItemDetail = ({ item, showModal, showCount, onAdd }) => {
    return (
        <Container>
            <Card className="my-4 h-100">
                <Row className="h-100">
                    <Col xs={12} md={6} className="my-2 d-flex align-items-strech">
                        <Card.Img src={item.imageUrl} style={{ objectFit: "cover", height: "100%" }}></Card.Img>
                    </Col>

                    <Col xs={12} md={6} className="d-flex flex-column">
                        <Card.Body className="flex-grow-1">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>Price: {item.price}€</Card.Text>
                            <Card.Text>
                                Quantity: {item.stock}
                            </Card.Text>
                        </Card.Body>
                        {item.stock !== 0 ?
                            <Card.Footer>
                                {showCount ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <AddToCartButtons />}
                            </Card.Footer>
                            :
                            <Card.Footer>
                                <p className='text-danger'>Sold out</p>
                                <Button className='px-4' onClick={showModal}> Notify me when is back!</Button>
                            </Card.Footer>
                        }
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ItemDetail