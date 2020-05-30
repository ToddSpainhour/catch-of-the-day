import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header className="top">
        <h1>
          Catch
          <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">the</span>
          </span>
          Day
          </h1>
        <h3 className="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
      </div>
    );
  }
}

export default Header;
