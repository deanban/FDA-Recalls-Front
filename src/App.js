import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RecallsContainer from './components/RecallsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecallsContainer />
      </div>
    );
  }
}

export default App;
