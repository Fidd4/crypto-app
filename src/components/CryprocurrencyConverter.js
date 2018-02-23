import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

const currencySymbols = {'USD': '$', 'EUR': '€', 'RUB': '₽'};

export default class SelectCryptoCoins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const fsym = this.props.fsym;
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${fsym}&tsyms=USD,EUR,RUB`;

    fetch(url)
      .then(response => response.json())
      .then(json => {this.setState({data: json})});
  }

  render() {
    const data = this.state.data;
    if(!data) return <div className="coin-info">Loading...</div>

    return (
      <div className="coin-info">
        {Object.keys(data).map((elem, index) => {
          return (
            <div key={index} className="coin-value">
              <NumberFormat className="coin-counter" value={data[elem]} displayType={'text'} thousandSeparator={true} prefix={`${currencySymbols[elem]} `} />
              <span className="coin-title">{elem}</span>
            </div>
          );
        })}
      </div>
    );
  }
}