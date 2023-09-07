import { useState, useEffect } from "react"
import { mFetch } from "../../utils/mockFetch"
import { useParams} from 'react-router-dom'

import ItemDetail from './ItemDetail/ItemDetail'

import Container from 'react-bootstrap/Container';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
        .then((res) => setItem(res))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    })

    return (
        <Container>
            {loading ? <h2>Loading ...</h2> : <ItemDetail item={item} />}
        </Container>
    )
}

export default ItemDetailContainer