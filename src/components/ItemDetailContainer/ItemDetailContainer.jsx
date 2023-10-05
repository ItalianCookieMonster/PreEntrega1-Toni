/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Container from 'react-bootstrap/Container';


import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import NotifyMeModal from '../Modals/NotifyMeModal/NotifyMeModal'
import MyOffCanvas from "../OffCanvas/MyOffCanvas";
import ProductAddedModal from "../Modals/ProductAddedModal/ProductAddedModal";
// import MyToast from "../Toasts/MyToast";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const [showEmailModal, setShowEmailModal] = useState(false);
    // const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [items, setItems] = useState(null)
    const { pid } = useParams()
    const [showCount, setShowCount] = useState(true)
    const { addToCart, totalPrice } = useCartContext()


    const onAdd = (quantity) => {
        setShowCount(false)
        // setShowOffCanvas(true)
        setShowProductModal(true)
        setItems(quantity)
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

            {/* <MyOffCanvas
                show={showOffCanvas}
                handleClose={() => setShowOffCanvas(false)}
                items={items}
                totalPrice={totalPrice}
                item={item}
            /> */}

            <ProductAddedModal
                show={showProductModal}
                handleClose={() => setShowProductModal(false)}
                items={items}
                totalPrice={totalPrice}
                item={item}
            />
        </Container>
    )
}

export default ItemDetailContainer