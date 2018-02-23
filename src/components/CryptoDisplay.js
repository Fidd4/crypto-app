import React, { Component } from 'react';

import CryprocurrencyConverter from './CryprocurrencyConverter';
import CryptocurrencyProps from './CryptocurrencyProps';

const COINS = ['BTC', 'ETH', 'LTC', 'ETC', 'BCH'];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fsym: 'BTC'
    };
  }

  updateState = (config) => {
    this.setState(config);
  }

  render() {
    const fsym = this.state.fsym;
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="widget widget-fullwidth coin">
            <div className="widget-head">
              <select
                className="form-control select-coin"
                onChange={(e) => this.updateState({ fsym: e.target.value })}>
                {COINS.map((coin, index) => (
                  <option
                    key={index}
                    value={coin}>{coin}
                  </option>
                ))}
              </select>
              <span className="title">Cryptocurrency</span>
            </div>
            <CryprocurrencyConverter key={fsym} fsym={fsym} />
          </div>
        </div>
        <div className="col-md-5">
          <CryptocurrencyProps key={fsym} fsym={fsym} />
        </div>
      </div>
    );
  }
}