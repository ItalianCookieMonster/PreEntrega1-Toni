import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import Container from "react-bootstrap/Container";
// import Hero from '../Hero/Hero';
import Loading from "../Loading/Loading";
import ItemList from "./ItemList/ItemList";
import HeroCarousel from "../HeroSection/HeroCarousel/HeroCarousel";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const { cid } = useParams()

    useEffect(() => {
        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'Products')
            const queryFilter = query(queryCollection, where('category', '==', cid))
            getDocs(queryFilter)
                .then((res) => setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'Products')
            getDocs(queryCollection)
                .then((res) => setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [cid])

    return (
        <>
            <HeroCarousel />
            <Container fluid>
                {loading ?
                    <Loading />
                    :
                    <ItemList products={products} />}
            </Container>
        </>
    )
}

export default ItemListContainer