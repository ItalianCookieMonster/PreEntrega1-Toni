/**
 * The `useCounter` function is a custom hook in React that manages a count state, allows incrementing
 * and decrementing the count within a specified range, and handles error messages when the count
 * reaches its maximum or when there is insufficient stock.
 * @param min - The `min` parameter represents the minimum value that the counter can have. It is used
 * to initialize the `count` state variable.
 * @param stock - The `stock` parameter represents the maximum number of items available in the
 * inventory.
 * @returns The `useCounter` custom hook is returning an object with the following properties:
 */
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
                setError("Ooops! We don't have enough items. Leave your email and we'll notify you when they're back")
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