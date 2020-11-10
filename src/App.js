
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import RenderProps from './components/renderProps/index'

class App extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        return (
            <div className="App">
                <RenderProps></RenderProps>
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header> */}
            </div>
        )
    }
}

export default App;
