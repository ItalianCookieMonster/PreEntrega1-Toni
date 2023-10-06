/* eslint-disable react/prop-types */
//React imports
import { useState } from 'react';

//Custom hook import
import { useCounter } from '../../hooks/useCounter';

//Boostrap imports
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

//Component imports
import NotifyMeModal from '../Modals/NotifyMeModal/NotifyMeModal';
import MyButton from '../Buttons/MyButton/MyButton';

//CSS imports
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [showModal, setShowModal] = useState(false)
    const { count, removeCount, addCount, error } = useCounter(initial, stock)
    return (
        <>
            <Container className='d-flex flex-column'>
                <Stack
                    gap={3}
                    direction="horizontal"
                    className="my-2">
                    <MyButton
                        type="button"
                        onClick={removeCount}
                        size="sm"
                        className="p-2"
                        text='-' />
                    <p className="p-2">{count}</p>
                    <MyButton
                        text='+'
                        type="button"
                        onClick={addCount}
                        size="sm"
                        className="p-2" />
                </Stack>
                <MyButton type="button" onClick={() => onAdd(count)} text='Add to cart' />
                {error &&
                    <p className="text-danger my-2">{error}</p>
                }
                {error && error.includes("email")
                    &&
                    <MyButton variant="outline-primary" onClick={() => setShowModal(true)} text='Notify me' />
                }
            </Container>
            
            <NotifyMeModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />

        </>
    )

}
export default ItemCount



