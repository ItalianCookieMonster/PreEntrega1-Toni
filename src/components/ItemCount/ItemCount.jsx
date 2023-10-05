/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


import './ItemCount.css'
import NotifyMeModal from '../Modals/NotifyMeModal/NotifyMeModal';


const ItemCount = ({ initial, stock, onAdd }) => {
    const [showModal, setShowModal] = useState(false)
    const { count, removeCount, addCount, error } = useCounter(initial, stock)
    return (
        <>
            <Stack gap={3} direction="horizontal" className="my-2">
                <Button type="button" onClick={removeCount} size="sm" className="p-2" validation="primary">-</Button>
                <p className="p-2">{count}</p>
                <Button type="button" onClick={addCount} size="sm" className="p-2" validation="primary">+</Button>
            </Stack>
            <Button type="button" onClick={() => onAdd(count)} variation="primary" className="w-100">Add to cart</Button>
            {error && <p className="text-danger my-2">{error}</p>}
            {error && error.includes("email")
                &&
                <Button variant="outline-primary" onClick={() => setShowModal(true)}>Notify me</Button>
            }
            <NotifyMeModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </>
    )

}
export default ItemCount



