import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Login from '../login/login';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Login />
        </div>
    );
  }
}

export default App;