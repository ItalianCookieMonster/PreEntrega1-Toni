import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { mFetch } from "../../utils/mockFetch";
import ItemList from "./ItemList/ItemList";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
    // eslint-disable-next-line react/prop-types
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const { cid } = useParams()

    useEffect(()=> {
        if(cid){
            mFetch()
            .then(products => setProducts(products.filter(product => product.category === cid)))
            .catch (err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            mFetch()
            .then(products => setProducts(products))
            .catch (err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [cid]
    )
 
    return (
        <Container fluid>
            {loading ?
                <Container className="text-center">
                <Spinner animation="border" role="status" className="mt-5">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </Container>

                :
                <ItemList products={products} />}
        </Container>
    )
}

export default ItemListContainer