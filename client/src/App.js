import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BibleBoard from './containers/BibleBoard';
import GameBaord from './containers/GameBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={GameBaord} />
          <Route exact path='/bible_jeopardy' component={BibleBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
