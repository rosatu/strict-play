import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <TodoApp />
          <p>
            Strawberry Fields Forever...
          </p>
        </header>
      </div>
    );
  }
}

export default App;
