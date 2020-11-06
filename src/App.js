
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Refs from './components/refs/index';

class App extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        return (
            <div className="App">
                <Refs><div>1</div></Refs>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default App;
