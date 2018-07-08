import React, { Fragment, Component } from 'react';
import { Form, Modal } from 'semantic-ui-react';
import ModalPlayerButtons from './ModalPlayerButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentPlayer } from '../actions';

class QuestionModalClue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    }
    this.playersAnswer = this.playersAnswer.bind(this);
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
        >
          <Form.Field width={6} style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'marginTop': '20px', 'marginBottom': '10px' }}
            disabled={this.state.disabled}
          >
            <label style={{'color': 'white'}}>Player's Answer</label>
            <input placeholder='What is...' />
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