import { useState, useEffect } from "react";

function Timer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        }

        return () => clearInterval(timer);

    }, [isRunning])


    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => setTime(0);

    return (
        <fieldset>
            <legend>Current Timer: {time}</legend>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </fieldset>
    );
}

export default Timer;