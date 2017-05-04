import React, { Component } from 'react';
import Dropdown from '../dropdown/dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Welcome to React </h2>
        <div> <Dropdown /> </div>
      </div>
    );
  }
}

export default App;
