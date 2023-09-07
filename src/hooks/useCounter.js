import { useState } from "react";

export const useCounter = (min, stock) => {
    const max = Math.min(stock, 20); 
    const [count, setCount] = useState(min);
    const [error, setError] = useState(null);

    const addCount = () => {
        if (count < max) {
            setCount(prevCount => prevCount + 1);
        } else {
            setError("Maximum allowed reached!");
        }
    }

    const removeCount = () => {
        count > min && setCount(prevCount => prevCount - 1)
    }

    return {count, removeCount, addCount, error}
}