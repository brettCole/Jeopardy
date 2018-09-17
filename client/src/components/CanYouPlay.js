import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckYourScore from './Wagers';
import { bindActionCreators } from 'redux';
import { yourPlayingFinal, yourNotPlayingFinal } from '../actions';
import Wagers from './Wagers';

class CanYouPlay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkIfPlaying();
  }

  checkIfPlaying() {
    for (let key of this.props.playerScores) {
      if (Object.values(key)[0] === 0) {
        this.props.yourNotPlayingFinal(Object.keys(key).toString())
      }
    }
  }

  showWhosPlaying = () => {
    let noScorers = [...this.props.whoCanPlay];
    let notPlaying = [];
    for (let i = 0; i < noScorers.length; i++) {
      if (Object.values(noScorers[i]).toString() === 'false') {
        notPlaying.push(
          <div key={i}>
            {Object.keys(noScorers[i]).toString()}, 
          </div>
        )
      }
    }
    return notPlaying
  }

  render() {
    return (
      <Modal
        open={true}
        centered={true}
        size='large'
        dimmer='blurring'
        style={{ 'textAlign': 'center', 'marginTop': '20px', 'backgroundColor': '#2185d0' }}
      >
        <Modal.Content
          style={{ 'backgroundColor': '#2185d0', 'color': '#fff' }}
        >
          <Modal.Header
            as='h1'
            style={{ fontSize:'4rem'}}
          >
            Unfortunately {this.showWhosPlaying()} will not be joining us in Final Jeopardy!
          </Modal.Header>
            <Button
              as='button'
              size='huge'
              color='green'
              /* onClick={this.showWages} */
            >
              <Link
                style={{ color:'#fff' }}
                to="/final_bible_jeopardy_wages"
              >
                Let's make some wagers!
              </Link>
            </Button>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    categoryAndClue: state.categoriesWithClues.categoriesWithClues,
    playerScores: state.teamScores,
    whoCanPlay: state.whosPlayingFinal
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    yourPlayingFinal,
    yourNotPlayingFinal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CanYouPlay);