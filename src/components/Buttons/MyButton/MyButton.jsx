/* eslint-disable react/prop-types */

// CSS imports
import './MyButton.css';

const MyButton = ({ onClick, text, className, type }) => {
    return (
        <button
            className={`${className} my-button`}
            onClick={onClick}
            type={type}>
            {text}
        </button>
    )
}

export default MyButton