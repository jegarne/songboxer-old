import React, { Component } from 'react';
import SetLists from './components/SetLists';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">...</h1>
                </header>
                <SetLists />
            </div>
        );
    }
}

export default App;
