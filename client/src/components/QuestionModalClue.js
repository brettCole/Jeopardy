import React, { Fragment, Component } from 'react';
import { Form, Message, Modal } from 'semantic-ui-react';
import ModalPlayerButtons from './ModalPlayerButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentPlayer } from '../actions';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class QuestionModalClue extends Component {
  constructor(props) {
    super(props);

    // variable names to be assigned depending on result of answer
    this.correctAnswer;
    this.incorrectAnswer;

    this.playersAnswer = this.playersAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.answerValue.toLowerCase() === this.props.clue.answer.toLowerCase()) {
      this.correctAnswer = <Message
        size="massive"
        color="green"
        header="Correct Answer"
        content="Current score plus 200"
      />
      this.forceUpdate();
    } else {
      this.incorrectAnswer = <Message
        size="massive"
        color="red"
        header="Incorrect Answer"
        content="Current score minus 200"
      />
      this.forceUpdate();
    }
  }

  playersAnswer = (e) => {
    let player = e.currentTarget.textContent;
    this.props.currentPlayer(player);
  }

  render() {

    const { answerValue } = this.props; 

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
              >
                {this.props.clue.description}
              </Modal.Header>
          }
        </Modal.Content>
        <ModalPlayerButtons playersAnswer={this.playersAnswer} />
        <Form
          as='form'
          size='massive'
          onSubmit={this.handleSubmit}
        >
          <Form.Field 
            width={6} 
            style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
            disabled={this.props.playerGuessing == undefined}
          >
            <label style={{'color': 'white'}}>Player's Answer</label>
            <Field 
              name='playerAnswer' 
              component='input' 
              type='text' 
              placeholder='What is... ?' 
            />
          </Form.Field>
          <Form.Field
            width={6}
            style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
          >
            {this.correctAnswer}
            {this.incorrectAnswer}
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
    currentPlayer
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
