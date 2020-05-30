import React from 'react';

import './StorePicker.scss';

class StorePicker extends React.Component {
  render() {
    return (
      <div className="StorePicker col-12">
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type ="text" required placeholder="Enter Store Name Here"/>
        <button className="btn btn-light" type="submit">Visit Store</button>
    </form>
    </div>
    );
  }
}


export default StorePicker;
