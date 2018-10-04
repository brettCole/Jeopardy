import React, { Component } from 'react';
import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react';
import ModalPlayerButtons from './ModalPlayerButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToTeamScore, currentPlayer, removeCurrentPlayer, resetPointValue, subtractFromTeamScore } from '../actions';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';

class QuestionModalClue extends Component {
  constructor(props) {
    super(props);

    // variable names to be assigned depending on result of answer
    this.correctAnswer = '';
    this.incorrectAnswer = '';
    this.needTheAnswer = '';

    // functions
    this.playersAnswer = this.playersAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showClueAnswer = this.showClueAnswer.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.reset();
    if (this.props.answerValue.toLowerCase() === this.props.clue.answer.toLowerCase() && this.props.playerGuessing !== '') {
      this.correctAnswer = <Message
        size="massive"
        color="green"
        header="Correct Answer"
        content={`${this.props.playerGuessing} gets ${this.props.clue.point_value}`}
      />
      this.props.addToTeamScore(this.props.playerGuessing, this.props.clue.point_value);
      this.props.resetPointValue(this.props.clue);
      setTimeout(() => {
        this.correctAnswer = '';
        this.incorrectAnswer = '';
        this.props.modalClose();
      }, 4000);
    } else {
      this.incorrectAnswer = <Message
        size="massive"
        color="red"
        header="Incorrect Answer"
        content={`${this.props.playerGuessing} loses ${this.props.clue.point_value}`}
      />
      this.props.subtractFromTeamScore(this.props.playerGuessing, this.props.clue.point_value);
      setTimeout(() => {
        this.correctAnswer = '';
        this.incorrectAnswer = '';
      }, 4000);
    }
    this.props.removeCurrentPlayer();
  }

  showClueAnswer(e) {
    e.preventDefault();
    this.needTheAnswer = <Message
      size="massive"
      color="orange"
      header="Correct Answer Is..."
      content={`${this.props.clue.answer}`}
    />
    // this.forceUpdate();
    this.props.resetPointValue(this.props.clue);
    setTimeout(() => {
      this.correctAnswer = '';
      this.incorrectAnswer = '';
      this.needTheAnswer = '';
      this.props.modalClose();
    }, 0)
  }


  playersAnswer = (e) => {
    let player = e.currentTarget.textContent;
    this.props.currentPlayer(player);
  }

  render() {

    const { answerValue } = this.props; 
  // debugger;
    return (
      
      <Modal 
        open={this.props.modalOpen}
        centered={true}
        size='fullscreen' 
        dimmer='blurring'
        style={{ 'textAlign': 'center', 'marginTop': '20px', 'backgroundColor': '#2185d0' }} 
      >
        <Modal.Content
          style={{ 'backgroundColor': '#2185d0', 'color': '#fff' }}
        >
          {
            this.props.clue !== undefined &&
              <Modal.Header
                as='h1'
                onClick={this.props.modalClose}
                style={{ fontSize:'4rem' }}     
              >
                {this.props.clue.description}
              </Modal.Header>
          }
        </Modal.Content>
        <ModalPlayerButtons playersAnswer={this.playersAnswer} />
        <div>
          <Button
            as='button'
            animated
            size="big"
            color="orange"
            onClick={this.showClueAnswer}
          >
            <Button.Content visible>
              <Icon name='frown outline' />
              What is... We don't know!
            </Button.Content>
            <Button.Content hidden>
              We need the answer!
            </Button.Content>
          </Button>
        </div>
        <Form
          as='form'
          size='massive'
          onSubmit={this.handleSubmit}
        >
          <Form.Field 
            width={6} 
            style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
            disabled={this.props.playerGuessing === undefined}
          >
            <label style={{ 'color': 'white', fontSize:'3rem' }}>Player's Answer</label>
            <Field 
              name='playerAnswer' 
              component='input' 
              type='text' 
              placeholder='What is... ?' 
              style={{ fontSize:'3rem' }}
            />
          </Form.Field>
          <Form.Field
            width={6}
            style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
          >
            {this.correctAnswer}
            {this.incorrectAnswer}
            {this.needTheAnswer}
          </Form.Field>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerGuessing: state.currentPlayer.currentPlayer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToTeamScore,
    currentPlayer,
    removeCurrentPlayer,
    resetPointValue,
    subtractFromTeamScore
  }, dispatch);  
}

QuestionModalClue = reduxForm({
  form: 'answer'
})(QuestionModalClue);

const selector = formValueSelector('answer');

QuestionModalClue = connect(state => {
  const answerValue = selector(state, 'playerAnswer')
  return {
    answerValue,
  }
})(QuestionModalClue);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModalClue);
