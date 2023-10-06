/* eslint-disable react/prop-types */
//Boostrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//Components imports
import ItemCount from '../../ItemCount/ItemCount'
import AddToCartButtons from '../../Buttons/AddToCartButtons/AddToCartButtons';
import MyButton from '../../Buttons/MyButton/MyButton'

const ItemDetail = ({ item, showEmailModal, showCount, onAdd }) => {
    return (
        <Container>
            <Card className="my-4 h-100">
                <Row className="h-100">
                    <Col xs={12} md={6} className="my-2 d-flex align-items-strech">
                        <Card.Img
                            src={item.imageUrl}
                            style={{ objectFit: "cover", height: "100%" }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column">
                        <Card.Body className="flex-grow-1">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>
                                <strong>Price:</strong> {item.price}€
                            </Card.Text>
                            <Card.Text>
                                <strong>Quantity</strong> {item.stock}
                            </Card.Text>
                            {
                                item.material &&
                                <Card.Text>
                                    <strong>Material:</strong> {item.material}

                                </Card.Text>
                            }
                            {
                                item.endOfLife &&
                                <Card.Text>
                                    <strong>End of life: </strong> {item.endOfLife}
                                </Card.Text>
                            }
                            {
                                item.useInstructions &&
                                <Card.Text>
                                    <strong>Use instructions: </strong> {item.useInstructions}
                                </Card.Text>
                            }
                        </Card.Body>
                        
    
                        {item.stock !== 0 ?
                            <Card.Footer>
                                {showCount ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <AddToCartButtons />}
                            </Card.Footer>
                            :
                            <Card.Footer>
                                <p className='text-danger'>Sold out</p>
                                <MyButton className='px-4' onClick={showEmailModal} text='Notify me when is back!' />
                            </Card.Footer>
                        }
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ItemDetail