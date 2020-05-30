import React from 'react';

import './CatchOfTheDay.scss';

import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Order from '../Order/Order';

class CatchOfTheDay extends React.Component {
  render() {
    return (
<div className="CatchOfTheDay">
  <div className="menu">
    <Header />
  </div>
    <Order />
    <Inventory />
</div>
    );
  }
}

export default CatchOfTheDay;
