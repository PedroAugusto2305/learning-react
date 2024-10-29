import { useState } from 'react'

function getInitValue() {
    console.log("obtendo o valor inicial");
    return 1 + 1;
}

export default function useCounter() {
    const [count, setCount] = useState(() => getInitValue());

    const increment = () => {
        setCount((currentState) => currentState + 1);
        setCount((currentState) => currentState + 1);
    }

    return { count, increment };
}