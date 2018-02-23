import React, { Component } from 'react';
import CryptoDisplay from './CryptoDisplay';

import './style.css';

export default class App extends Component {
  render() {
    return (
      <div className="main-content container">
        <CryptoDisplay />
      </div>
    );
  }
}