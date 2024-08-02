import React from 'react';
import useCounter from './useCounter';

const CustomHookCounter = () => {
    const { count, decrement, increment, reset } = useCounter(5);

    return (
        <fieldset>
            <legend>Counter Using Custom hooks </legend>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </fieldset>
    )
}

export default CustomHookCounter;