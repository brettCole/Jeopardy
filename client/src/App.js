import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history';
import BibleBoard from './containers/BibleBoard';
import GameBaord from './containers/GameBoard';
import DoubleBoard from './containers/DoubleBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Wagers from './components/Wagers';
import FinalClueAndAnswer from './containers/FinalClueAndAnswer';
import FinalWinner from './containers/FinalWinner';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path='/' component={GameBaord} />
          <Route exact path='/bible_jeopardy' component={BibleBoard} />
          <Route path='/double_bible_jeopardy' component={DoubleBoard} />
          <Route path='/final_bible_jeopardy' component={FinalJeopardy} />
          <Route exact path='/final_bible_jeopardy_wages' component={Wagers} />
          <Route exact path='/final_bible_jeopardy_clue_and_answers' component={FinalClueAndAnswer} />
          <Route exact path='/final_bible_jeopardy_winner' component={FinalWinner} />
        </div>
      </Router>
    );
  }
}

export default App;
