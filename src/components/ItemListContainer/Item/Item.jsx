/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//React-router-dom imports
import { Link } from 'react-router-dom'

//Boostrap components imports
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

//Components imports
import MyButton from '../../Buttons/MyButton/MyButton';

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
                    {      /* This code is conditionally rendering different elements based on the value of
          `                 product.stock`. */}
                    {product.stock !== 0 ?
                        <MyButton className='m-4' text='Details' />
                        :
                        <>
                            <p className="text-danger text-center">SOLD OUT</p>
                            <MyButton className="m-4" text='Notify me when is back' />
                        </>
                    }

                </Card>
            </Link>
        </Col>
    )
}

export default Item