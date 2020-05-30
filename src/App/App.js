import React from 'react';
import StorePicker from '../components/StorePicker/StorePicker';
import CatchOfTheDay from '../components/CatchOfTheDay/CatchOfTheDay';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StorePicker />
        <CatchOfTheDay />
      </div>
    );
  }
}

export default App;
