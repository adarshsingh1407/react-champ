import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ControlledComponentForm from './components/ControlledComponentForm';
import UncontrolledComponentForm from './components/UncontrolledComponentForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {/* <ControlledComponentForm /> */}
          <UncontrolledComponentForm />
        </header>
      </div>
    );
  }
}

export default App;
