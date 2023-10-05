/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Item from "../Item/Item"

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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