import React, { Fragment, Component } from 'react';
import { Form, Message, Modal } from 'semantic-ui-react';
import ModalPlayerButtons from './ModalPlayerButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentPlayer } from '../actions';

class QuestionModalClue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      hidden: true,
      correct: false,
      value: ''
    }
    this.playersAnswer = this.playersAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      hidden: false,
      value: ''
    })
    if (this.state.value.toLowerCase() === this.props.clue.answer.toLowerCase()) {
      this.setState({
        correct: true
      })
    }
    this.setState({
      disabled: true
    })
  }

  playersAnswer = (e) => {
    let player = e.currentTarget.textContent;
    this.props.currentPlayer(player);
    this.setState({
      disabled: false
    })
  }

  render() {
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
          {this.props.clue !== undefined &&
            <Modal.Header
              as='h1'
              onClick={this.props.test}      
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
          <Form.Field width={6} style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
            disabled={this.state.disabled}
          >
            <label style={{'color': 'white'}}>Player's Answer</label>
            <Form.Input 
              type="text"
              placeholder="What is..."
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field
            width={6}
            style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
          >
          {
            this.state.correct ? (
              <Message
                hidden={this.state.hidden}
                size="massive"
                color="green"
                header="Correct Answer"
                content="Current score plus 200"
              />
            ) : (
              <Message
                hidden={this.state.hidden}
                size="massive"
                color="red"
                header="Incorrect Answer"
                content="Current score minus 200"
              />
            )
          }
          </Form.Field>
        </Form>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    currentPlayer
  }, dispatch);  
}

export default connect(null, mapDispatchToProps)(QuestionModalClue);