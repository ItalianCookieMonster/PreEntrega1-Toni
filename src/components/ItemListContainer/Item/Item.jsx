/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Item = ({ product }) => {
    return (

        <Col>
            <Link to={`/detail/${product.id}`}>
                <Card className="h-100">
                    <Card.Img
                        variant="top"
                        src={product.imageUrl}
                        style={{ objectFit: "cover", height: "400px" }}
                    />
                    <Card.Body className="custom-card-body">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className='py-2'>{product.description}</Card.Text>
                    </Card.Body>
                    {product.stock !== 0 ?
                        <Button className='m-4'>Details</Button> :
                        <>
                            <p className="text-danger text-center">SOLD OUT</p>
                            <Button className="m-4 ">Notify me when is back</Button>
                        </>
                    }

                </Card>
            </Link>
        </Col>
    )
}

export default Item