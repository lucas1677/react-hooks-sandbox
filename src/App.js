import React, {useEffect, useState} from 'react';
import axios from 'axios';
import addressPicker from './components/react-hooks-2-level-address-picker';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <hr/>
                {post.title}
                <hr/>
                <hr/>
                <addressPicker></addressPicker>
            </header>
        </div>
    );
}

export default App;
