import React from 'react';
import './styles.css';
import Table from './Table';

//The constants are removed from the component declaration as the function
//bodies of function components ARE the render functions. So we don't
//want to redeclare it on every render. One COULD place it inside the
//function and store it on a ref but as this should mimic incoming data that
//won't be a good example here.
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
