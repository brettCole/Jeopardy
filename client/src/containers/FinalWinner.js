import React, { Component } from 'react';
import { Card, Container, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FinalWinner extends Component {
  constructor(props) {
    super(props)

    this.winner;
    // this.findWinner = () => this.findWinner();
  }

  findWinner = () => {
    let self = this
    this.winner = this.props.scores[0];
    this.props.scores.map((each, i) => {
      if (parseInt(Object.values(self.winner), 10) < parseInt(Object.values(each), 10)) {
        self.winner = each;
      }
    });
    return Object.keys(self.winner).toString();
  }

  winnerScore = () => {
    let score;
    this.props.scores.map((each, i) => {
      if (Object.keys(each).toString() === Object.keys(this.winner).toString()) {
        score = parseInt(Object.values(each), 10)
      }
    })
    return score;
  }

  render() {
    return (
      <Container fluid textAlign='center' style={{ 'backgroundColor':'#2185d0', 'height':'100vh', 'padding':'5%' }}>
        <Header size='huge' style={{ 'color':'white', 'fontSize':'5rem', 'marginBottom':'15%' }}>
          {this.findWinner()} are our big winners with a score of {this.winnerScore()}
        </Header>
        <Card.Group centered={true}>
        {
          this.props.scores.map((each, i) => {
            if (Object.keys(each).toString() !== Object.keys(this.winner).toString()) {
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
                  <Card.Description as='h3' style={{'color':'white'}}>
                    {parseInt(Object.values(each), 10)}    
                  </Card.Description>
                </Card.Content>
                </Card>
              )
            }
            {/* debugger; */}
          })
        }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    scores: state.teamScores
  }
}

export default connect(mapStateToProps)(FinalWinner);