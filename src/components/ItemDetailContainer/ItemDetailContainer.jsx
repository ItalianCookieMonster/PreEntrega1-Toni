/* eslint-disable no-unused-vars */
//React imports
import { useState, useEffect } from "react"

//Custom hooks imports
import { useCartContext } from '../context/CartContext';

//External libraries imports
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

//Boostrap components imports
import Container from 'react-bootstrap/Container';

//Component imports
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import NotifyMeModal from '../Modals/NotifyMeModal/NotifyMeModal'
import ProductAddedModal from "../Modals/ProductAddedModal/ProductAddedModal";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [nrProds, setNrProds] = useState(null)
    const { pid } = useParams()
    const [showCount, setShowCount] = useState(true)
    const { addToCart } = useCartContext()


    /**
     * The function "onAdd" is used to add a specified quantity of an item to the cart and display a
     * product modal.
     */
    const onAdd = (quantity) => {
        setShowCount(false)
        setShowProductModal(true)
        setNrProds(quantity)
        addToCart({ ...item, quantity })
    }

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'Products', pid)
        getDoc(queryDoc)
            .then((res) => ({ id: res.id, ...res.data() }))
            .then((res) => setItem(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [pid])

    return (
        <Container>
            {loading ?
                <Loading />
                :
                <ItemDetail
                    item={item}
                    showModal={() => setShowEmailModal(true)}
                    onAdd={onAdd}
                    showCount={showCount}
                />}
            <NotifyMeModal
                show={showEmailModal}
                handleClose={() => setShowEmailModal(false)}
            />

            <ProductAddedModal
                show={showProductModal}
                handleClose={() => setShowProductModal(false)}
                nrProds={nrProds}
                item={item}
            />
        </Container>
    )
}

export default ItemDetailContainer