import React, { Component } from 'react';
import './App.scss';
import { ZipcodeLookup } from './ZipcodeLookup/ZipcodeLookup';

class App extends Component {
  render() {
    return (
      <div>
        <ZipcodeLookup />
      </div>
    );
  }
}

export default App;
