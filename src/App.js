import React, { Component } from 'react';
import './App.css';

import Routes from './components/routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
