import React, { Component } from 'react';
import './App.css';

import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Image and Text Stats</h1>
        </header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
