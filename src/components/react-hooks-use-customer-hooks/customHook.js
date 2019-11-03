import React, {useState} from 'react';

export function useCount({initVal}) {

    const [count, setCount] = useState(initVal ? initVal : 0);

    function increase() {
        setCount(count + 1);
    }

    function getCalculateCount() {
        return count * count;
    }

    return {count, increase, getCalculateCount};
}
