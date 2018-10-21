import React, { Component } from 'react';
import './App.scss';

import ZipcodeLookup from './containers/ZipcodeLookup/ZipcodeLookup';

class App extends Component {
  render() {
    return (
      <div>
        Hello, Neighbor!
        <ZipcodeLookup />
      </div>
    );
  }
}

export default App;
