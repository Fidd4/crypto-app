import React, { Component } from 'react';

const dataProps = {
  'MKTCAP': 'Mkt. Cap.',
  'VOLUME24HOUR': 'Vol. 24H',
  'LOW24HOUR': 'Low 24h',
  'HIGH24HOUR': 'High 24h',
  'SUPPLY': 'Current Supply'
};

export default class CryptocurrencyProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const fsym = this.props.fsym;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsym}&tsyms=USD`;

    fetch(url)
      .then(response => response.json())
      .then(json => {this.setState({data: json})});
  }

  render() {
    const data = this.state.data;
    if(!data) return <div className="widget-info">Loading...</div>

    const coinName = this.props.fsym;
    const dataDisplay = data['DISPLAY'];
    const dataCoin = dataDisplay[coinName];
    const dataCurrency = dataCoin['USD'];

    return (
      <div className="widget-info">
      {Object.keys(dataProps).map((elem, index) => {
        return (
          <div key={index} className="item">
            <div className="item-value">
              <span className="item-value-counter">
                {dataCurrency[elem]}
              </span>
              <span className="item-value-title">{dataProps[elem]}</span>
            </div>
          </div>
        );
      })}
      </div>
    );
  }
}