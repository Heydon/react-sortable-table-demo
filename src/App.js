import React, { Component } from 'react';
import './styles.css';
import Table from './Table';

class App extends Component {
  render() {
    const headers = ['Band', 'Singer', 'Inception', 'Label'];

    const rows = [
      ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
      ['Carcass', 'Jeff Walker', '1985', 'Earache'],
      ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
      ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']
    ];
    return (
      <div className="App">
        <Table rows={rows} headers={headers} rowHeaders caption="Grindcore bands" sortable />
      </div>
    );
  }
}

export default App;
