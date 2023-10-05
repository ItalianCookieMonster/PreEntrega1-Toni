import { useState } from "react";

export const useCounter = (min, stock) => {
    const max = Math.min(stock, 20);
    const [count, setCount] = useState(min);
    const [error, setError] = useState(null);

    const addCount = () => {
        if (count < max) {
            setCount(prevCount => prevCount + 1);
        } else {
            if (max < 20) {
                setError("Ooops! We don't have enough items. Live your email and we'll notify you when they're back")
            } else {
                setError("Maximum allowed reached, if you wish more please contact us");
            }
        }
    }

    const removeCount = () => {
        if (count < max) {
            setError(null);
        }
        count > min && setCount(prevCount => prevCount - 1)
    }

    return { count, removeCount, addCount, error }
}