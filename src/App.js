import { BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Page />
        </Router>
      </div>
    );
  }
}

export default App;
