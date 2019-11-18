import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Loginform from '../loginform/loginform';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Loginform />
        </div>
    );
  }
}

export default App;