import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BibleBoard from './containers/BibleBoard';
import GameBaord from './containers/GameBoard';
import DoubleBoard from './containers/DoubleBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Wagers from './components/Wagers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={GameBaord} />
          <Route exact path='/bible_jeopardy' component={BibleBoard} />
          <Route path='/double_bible_jeopardy' component={DoubleBoard} />
          <Route path='/final_bible_jeopardy' component={FinalJeopardy} />
          <Route exact path='/final_bible_jeopardy_wages' component={Wagers} />
        </div>
      </Router>
    );
  }
}

export default App;
