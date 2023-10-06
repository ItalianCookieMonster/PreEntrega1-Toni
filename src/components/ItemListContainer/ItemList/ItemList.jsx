/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//Boostrap imports
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//Component imports
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5" >
                {products.map((product) => <Item key={product.id} product={product} />)}
            </Row>
        </Container>
    )
}

export default ItemList