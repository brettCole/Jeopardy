import React, { Component } from 'react';
import { Card, Form, Modal, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addFinalWagerToTeamScore, subtractFinalWagerFromTeamScore } from '../actions';
import { bindActionCreators } from 'redux';
import history from '../history';

class EnterAnswers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Amhaarets:'',
      Gadites:'',
      Beroeans:''
    };

    this.correctIncorrectMessage = '';
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let counter = this.numberOfPlayers();
    const eachPlayer = ['Amhaarets', 'Gadites', 'Beroeans'];
    let stateValue;
    const keyValue = parseInt(e.target.dataset.key, 10);
    if (keyValue === 0) {
      stateValue = this.state.Amhaarets;
    } else if (keyValue === 1) {
      stateValue = this.state.Gadites;
    } else {
      stateValue = this.state.Beroeans;
    }
    if (parseInt(stateValue, 10) === parseInt(this.props.clue[0].bible_clues[0].answer.toString().toLowerCase(), 10)) {
      this.correct(e);
      this.props.addFinalWagerToTeamScore(e.target.dataset.key, this.props.wager)
      this.resetState();
    } else {
      this.incorrect(e);
      this.props.subtractFinalWagerFromTeamScore(e.target.dataset.key, this.props.wager)
      this.resetState();
    }
    if (counter === 1 || counter === keyValue + 1) {
      history.push('/final_bible_jeopardy_winner');
    }
  }

  numberOfPlayers = () => {
    let counter = 0;
    this.props.players.map(each => {
      if (Object.values(each).toString() === 'true') {
        counter++
      }
    })
    return counter;
  }

  correct = (e) => {
      this.correctIncorrectMessage = <Message
        attached='bottom'
        size="massive"
        color="green"
        header="Correct Answer"
        content={`${Object.keys(this.props.players[parseInt(e.target.dataset.key, 10)]).toString()} adds ${parseInt(Object.values(this.props.wager[e.target.dataset.key]), 10)} to their score!`}
      />
    this.forceUpdate();
  }

  incorrect = (e) => {
      this.correctIncorrectMessage = <Message
        attached='bottom'
        size="massive"
        color="red"
        header="Incorrect Answer"
        content={`${Object.keys(this.props.players[parseInt(e.target.dataset.key, 10)]).toString()} loses ${parseInt(Object.values(this.props.wager[e.target.dataset.key]), 10)} from their score!`}
      />
    this.forceUpdate();
  }

  resetState = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        centered={true}
        size='large'
        dimmer='blurring'
        style={{ 'textAlign': 'center', 'marginTop': '20px', 'backgroundColor': '#2185d0' }}
      >
        <Modal.Content
          style={{ 'backgroundColor': '#2185d0', 'color': '#fff' }}
        >
          <Card.Group
            centered={true}
          >
            {
              this.props.players.map((each, i) => {
                const self = this;
                if (Object.values(each).toString() === true.toString()) {
                  const eachPlayer = ['Amhaarets', 'Gadites', 'Beroeans'];
                  let player = eachPlayer[i];
                  return (
                    <Card
                      centered={true}
                      key={i}
                      raised={true}
                      style={{'backgroundColor':'#2185d0', color:'white'}}
                    >
                      <Card.Content>
                      <Card.Header textAlign='center' as='h1' style={{'color':'white'}}>
                        {Object.keys(each).toString()}
                      </Card.Header>
                          <Form
                            as='form'
                            onSubmit={this.handleSubmit}
                            key={i}
                            data-key={i}
                          >
                            <Form.Field>
                              <label style={{'color':'white'}}>What is your Answer?</label>
                              <input
                                icon='write' 
                                iconPosition='right' 
                                focus 
                                placeholder='Answer' 
                                name={eachPlayer[i]}
                                type='text'
                                value={self.state.player}
                                onChange={this.handleChange}
                              />
                            </Form.Field>
                            {/* <Form.Field>
                              {this.correctIncorrectMessage}
                            </Form.Field> */}
                            <Form.Button 
                              type='submit'
                              size='large'
                              color='blue'
                              content='Submit'
                            />
                          </Form>
                        </Card.Content>
                    </Card>
                  )
                }
              })
            }
          </Card.Group>
          {this.correctIncorrectMessage}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.whosPlayingFinal,
    modalOpen: state.modalOpenClick.modalOpen,
    clue: state.categoriesWithClues.categoriesWithClues,
    wager: state.makeWagers
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFinalWagerToTeamScore,
    subtractFinalWagerFromTeamScore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterAnswers);