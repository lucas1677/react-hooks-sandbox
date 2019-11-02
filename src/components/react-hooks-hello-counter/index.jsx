import React, {useEffect, useState} from 'react';
import logo from "../../logo.svg";

export default function () {
    const [count, setCount] = useState(0);


    useEffect(() => {
        window.document.title = "hello lucas!" + count;
    }, [count]);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <>
            <hr/>
            {count}
            <img src={logo} onClick={increaseCount} className="App-logo" alt="logo"/>
        </>
    );
}
