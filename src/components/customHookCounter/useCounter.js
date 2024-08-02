import { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);
    const reset = () => setCount(initialValue);

    return { count, decrement, increment, reset };
}

export default useCounter;