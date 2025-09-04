import { useState } from "react";

export default function ReactHook() {
    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(prev => prev + 1);
    }

    const handleDecrease = () => {
        setCount(prev => prev - 1);
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </>
    );
}