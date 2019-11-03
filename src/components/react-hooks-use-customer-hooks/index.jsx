import React from 'react';
import {useCount} from './customHook';

export default function () {

    const {count, increase, getCalculateCount} = useCount({initVal: 5});

    return (
        <div onClick={increase}>
            {count}
            <hr/>
            {getCalculateCount()}
        </div>
    );
}
