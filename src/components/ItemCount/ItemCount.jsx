/* eslint-disable react/prop-types */
import { useCounter } from '../../hooks/useCounter';

// import ModalSimple from '../Modals/ModalSimple';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


import './ItemCount.css'


const ItemCount = ({ initial, stock, onAdd, error }) => {
    const { count, removeCount, addCount } = useCounter(initial, stock)

    return (
        <>
            {error && <Alert>{error}</Alert>}
            <Stack gap={3} direction="horizontal" className="my-2">
                <Button type="button" onClick={removeCount} size="sm" className="p-2" validation="primary">-</Button>
                <p className="p-2">{count}</p>
                <Button type="button" onClick={addCount} size="sm" className="p-2" validation="primary">+</Button>
            </Stack>
            <Button type="button" onClick={() => onAdd(count)} variation="primary" className="w-100">Add to cart</Button>
        </>

    )
}


export default ItemCount




