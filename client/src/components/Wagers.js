import React, { Component } from "react";
import { Card, Container, Form, Reveal } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeWagers } from '../actions';
import history from '../history';

class Wagers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'Amhaarets':'',
      'Gadites':'',
      'Beroeans':''
    };
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
    const keyValue = parseInt(e.target.dataset.key, 10)
    
    if (keyValue === 0) {
    this.props.makeWagers(this.props.whoCanPlay[keyValue], parseInt(this.state.Amhaarets, 10));
    } else if (keyValue === 1) {
      this.props.makeWagers(this.props.whoCanPlay[keyValue], parseInt(this.state.Gadites, 10));
    } else {
      this.props.makeWagers(this.props.whoCanPlay[keyValue], parseInt(this.state.Beroeans, 10));
    }
    this.resetState();
    if (counter === 1 || counter === keyValue + 1) {
      history.push('/final_bible_jeopardy_clue_and_answers');
    }
  }

  numberOfPlayers = () => {
    let counter = 0;
    this.props.whoCanPlay.map(each => {
      if (Object.values(each).toString() === 'true') {
        counter++
      }
    })
    return counter;
  }

  resetState = () => {
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <Container textAlign='center'>
        <Card.Group 
          style={{marginTop:'15%'}}
          itemsPerRow={3}
          centered={true}
        >
          {
            this.props.whoCanPlay.map((each, i) => {
              const self = this;
              if (Object.values(each).toString() === 'true') {
                const eachPlayer = ['Amhaarets', 'Gadites', 'Beroeans'];
                let player = eachPlayer[i];
                return (
                  <Reveal 
                    animated='fade' 
                    instant key={i}
                  >
                    <Reveal.Content 
                      visible
                      style={{ pointerEvents:'none' }}
                    >
                      <Card
                        centered={true}
                        key={i}
                        raised={true}
                        style={{'backgroundColor':'#2185d0', color:'white'}}
                      >
                        <Card.Header textAlign='center' as='h1'>
                          {Object.keys(each).toString()}
                        </Card.Header>
                        <Card.Header 
                          textAlign='center' 
                          as='h3'
                        >
                          No peeking on other players wagers!
                        </Card.Header>
                        <Card.Header as='h1'></Card.Header>
                        <Card.Header as='h1'></Card.Header>
                        <Card.Header as='h2'></Card.Header>
                      </Card>
                    </Reveal.Content>

                    <Reveal.Content hidden>
                      <Card
                        centered={true}
                        key={i}
                        raised={true}
                      >
                        <Card.Header textAlign='center' as='h1'>
                          {Object.keys(each).toString()}
                        </Card.Header>
                        <Card.Header 
                          textAlign='center' 
                          as='h3'
                        >
                          Please make your wager!
                        </Card.Header>
                        <Card.Content>
                          <Form
                            as='form'
                            onSubmit={this.handleSubmit}
                            key={i}
                            data-key={i}
                          >
                            <Form.Field>
                              <label>Place your Wager</label>
                              <Form.Input 
                                icon='money' 
                                iconPosition='right' 
                                focus 
                                placeholder='Wager' 
                                name={eachPlayer[i]}
                                value={self.state.player}
                                onChange={this.handleChange}
                              />
                            </Form.Field>
                            <Form.Button 
                              type='submit'
                              size='large'
                              color='blue'
                              content='Submit'
                            />
                          </Form>
                        </Card.Content>
                      </Card>
                    </Reveal.Content>
                  </Reveal>
                )
              }
            })
          }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    whoCanPlay: state.whosPlayingFinal
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    makeWagers
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Wagers);