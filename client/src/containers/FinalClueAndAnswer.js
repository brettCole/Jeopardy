/* eslint-disable */

import React, { Component } from 'react';
import { Button, Container, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CategoryTitleAndClues from '../components/CategoryTitleAndClues';
import EnterAnswers from '../components/EnterAnswers';
import { bindActionCreators } from 'redux';
import { modalOpenClick } from '../actions';

class FinalClueAndAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 3
    }

    this.modalClue = '';
  }

  componentDidMount() {
    this.readQuestion();
    setTimeout(() => {
      this.timerID = setInterval(() => {
        this.state.timer === 0 ? 
          [this.stopTheShow(),
          clearInterval(this.timerID)]
          : this.tick()
        }, 1000)
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  }

  stopTheShow = () => {
    this.modalClue = 
      <React.Fragment>
        <Message
          size='massive'
          negative
          color='red'
        >
          Times Up! Pencils Down.
        </Message>
        <Button
          as='button'
          color='green'
          role='button'
          content='Enter Answers'
          size='large'
          onClick={this.props.modalOpenClick}
        />
      </React.Fragment>
      this.forceUpdate();
  }

  readQuestion = () => {
    if (this.props.finalClue) {
      window.responsiveVoice.speak(this.props.finalClue[0].bible_clues[0].description, "US English Male");
    }
  }

  render() {
    return (
      <Container fluid style={{ 'backgroundColor':'#2185d0', 'height':'100vh', 'padding':'5%' }}>
        <EnterAnswers />
        <Header size='huge' style={{ 'color':'white', 'fontSize':'5rem' }}>
          Here's your clue!
        </Header>
        <Header size="huge">
          {this.modalClue}
        </Header>
        <Header size='huge' style={{ 'color':'white' }}>
          {
            this.props.finalClue && 
              [this.props.finalClue[0].bible_clues[0].description]
          }
        </Header>
        <Header size='huge' style={{ 'color':'white' }}>
          30 seconds players...
        </Header>
        <CategoryTitleAndClues style={{ 'color':'white' }}>
          {this.state.timer}
        </CategoryTitleAndClues>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    finalClue: state.categoriesWithClues.categoriesWithClues
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    modalOpenClick
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalClueAndAnswer);