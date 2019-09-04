import React from 'react';
import './styles.css';
import Table from './Table';

const headers = ['Band', 'Singer', 'Inception', 'Label'];

const rows = [
  ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
  ['Carcass', 'Jeff Walker', '1985', 'Earache'],
  ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
  ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead'],
];

const App = () => (
  <div className="App">
    <Table
      rows={rows}
      headers={headers}
      rowHeaders
      caption="Grindcore bands"
      sortable
    />
  </div>
);

export default App;
