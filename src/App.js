import React, { Component } from 'react';
import logo from './assets/images/300pp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to #SlothDay
          </h1>
         
        </header>
      </div>
    );
  }
}

export default App;
