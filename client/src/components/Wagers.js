import React, { Component } from "react";
import { Button, Card, Container, Form, Input, Label, Reveal, Segment } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeWagers } from '../actions';

class Wagers extends Component {
  constructor(props) {
    super(props)

    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange = (e, { value, wager }) => this.setState({ [value]: wager })
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.makeWagers(this.props.whoCanPlay[parseInt(e.target.dataset.key, 10)], parseInt(this.state.value, 10))
  }

  // makeWagers = (player) => {
  //   debugger;
  //   player.preventDefault();
  //   this.props.makeWagers(player);
  // }

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
              if (Object.values(each).toString() === 'true') {
                return (
                  <Reveal animated='fade' instant key={i}>
                    <Reveal.Content visible style={{ pointerEvents:'none' }}>
                      <Card
                        centered={true}
                        key={i}
                        raised={true}
                        style={{'backgroundColor':'blue', color:'white'}}
                      >
                        <Card.Header textAlign='center' as='h1'>
                          {Object.keys(each).toString()}
                        </Card.Header>
                        <Card.Header textAlign='center' as='h3'>
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
                        <Card.Header textAlign='center' as='h3'>
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
                                name='wager' 
                                value={this.state.value}
                                onChange={this.handleChange}
                              />
                            </Form.Field>
                            <Form.Button 
                              type='submit'
                              size='large'
                              color='blue'
                              content='Submit'
                            />
                              {/* Submit */}
                            {/* </Form.Button> */}
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
// create redux store for wager amount of each player
  // each player card have a form to enter wager amount