import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ControlledComponentForm from './components/ControlledComponentForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <ControlledComponentForm />
        </header>
      </div>
    );
  }
}

export default App;
