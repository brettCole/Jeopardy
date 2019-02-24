import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import QuestionModalClue from '../components/QuestionModalClue';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';
import { bindActionCreators } from 'redux';
import { modalCloseClick, modalOpenClick, displayClue } from '../actions';
import { withRouter } from 'react-router';
import TimeForDoubleJeopardy from '../components/TimeForDoubleJeopardy';

class ClueBoard extends Component {
  constructor(props) {
    super(props);

    this.doubleJeopardy = '';

    this.handleOnClick = this.handleOnClick.bind(this);
    this.checkPointValues = this.checkPointValues.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allClues) {
        this.checkPointValues();
    }
  }

  handleOnClick(e) {
    this.props.modalOpenClick();
    let categoryTitleString = e.currentTarget.parentElement.offsetParent.children[0].childNodes[0].cells[e.currentTarget.cellIndex].innerText;
    let categoryArray = ['category_one', 'category_two', 'category_three', 'category_four', 'category_five', 'category_six'];

    let currentModalCategory = this.props.categoryClues[e.currentTarget.cellIndex];
    let clue;
    for (let i = 0; i < currentModalCategory.bible_clues.length; i++) {
      if (currentModalCategory.bible_clues[i].point_value === parseInt(e.currentTarget.innerText, 10)) {
        clue = currentModalCategory.bible_clues[i];
        break;
      }
    }

    // setTimeout(window.responsiveVoice.speak(clue.description, "US English Male"), 1000);
    window.responsiveVoice.speak(clue.description, "US English Male");

    // let testing = setTimeout(window.responsiveVoice.speak("His being foremost in speaking was matched by his being most frequently corrected, reproved, or rebuked.", "US English Male"), 8000);
    
    // let randomClue = Math.floor(Math.random() * this.props.categoryClues[categoryArray[e.currentTarget.cellIndex]].options.clues.length) + 1

    // let clueInfo = this.props.categoryClues[categoryArray[e.currentTarget.cellIndex]].options.clues[clueNumber].options
    
    // let testing = window.responsiveVoice.speak("A second beast, it being like a bear. And on one side it was raised up, and there were three ribs in its mouth between its teeth; and this is what they were saying to it, Get up, eat much flesh.", "US English Male");
    this.props.displayClue(clue);
  }

  checkPointValues() {
    for (let i = 0; i < this.props.allClues.length; i++) {
      for (let j = 0; j < this.props.allClues[i].bible_clues.length; j++) {
        if (this.props.allClues[i].bible_clues[j].point_value !== null) {
          return false;
        }
      }
    }
    if (window.location.pathname === '/bible_jeopardy') {
      this.doubleJeopardy = 
        <TimeForDoubleJeopardy 
          header="Hope everybody likes their score and the questions. Get ready it's time for Double Jeopardy!"
          linkBoard='/double_bible_jeopardy'
          linkTitle="Double Jeopardy"  
        />
    } else {
      this.doubleJeopardy = 
        <TimeForDoubleJeopardy 
          header="Time for final Jeopardy. Hopefully everyone will be playing. Here we go!"
          linkBoard='/final_bible_jeopardy'
          linkTitle="Final Jeopardy"
        />
    }
  }

  render() {
    const arr = [0, 1, 2, 3, 4, 5];
    return (
      <React.Fragment>
        {this.doubleJeopardy}
        <QuestionModalClue 
          modalOpen = {this.props.modalOpen}
          clue = {this.props.clue}
          modalClose = {this.props.modalCloseClick}
          checkPoints = {this.checkPointValues}
        />
        <Table.Body as='tbody'>
          <Table.Row as='tr' cellAs='td'>
            {
              this.props.categoryClues &&
                arr.map((ind, i) => {
                  return (
                    <Table.Cell 
                      selectable 
                      onClick={this.handleOnClick}
                      key={i}
                      disabled={false}
                    >
                      <CategorieTitleAndClues>{this.props.categoryClues[i].bible_clues[0].point_value}</CategorieTitleAndClues>
                    </Table.Cell> 
                  )
                })
            }
          </Table.Row>
          <Table.Row as='tr' cellAs='td'>
            {
              this.props.categoryClues &&
                arr.map((ind, i) => {
                  return (
                    <Table.Cell 
                      selectable
                      onClick={this.handleOnClick}
                      key={i}
                    >
                      <CategorieTitleAndClues>{this.props.categoryClues[i].bible_clues[1].point_value}</CategorieTitleAndClues>
                    </Table.Cell>
                  )
                })
            }
          </Table.Row>
          <Table.Row as='tr' cellAs='td'>
            {
              this.props.categoryClues &&
                arr.map((ind, i) => {
                  return (
                    <Table.Cell 
                      selectable
                      onClick={this.handleOnClick}
                      key={i}  
                    >
                      <CategorieTitleAndClues>{this.props.categoryClues[i].bible_clues[2].point_value}</CategorieTitleAndClues>
                    </Table.Cell>
                  )
                })
            }
          </Table.Row>
          <Table.Row as='tr' cellAs='td'>
            {
              this.props.categoryClues &&
                arr.map((ind, i) => {
                  return (
                    <Table.Cell 
                      selectable
                      onClick={this.handleOnClick}
                      key={i}  
                    >
                      <CategorieTitleAndClues>{this.props.categoryClues[i].bible_clues[3].point_value}</CategorieTitleAndClues>
                    </Table.Cell>
                  )
                })
            }
          </Table.Row>
          <Table.Row as='tr' cellAs='td'>
            {
              this.props.categoryClues &&
                arr.map((ind, i) => {
                  return (
                    <Table.Cell 
                      selectable
                      onClick={this.handleOnClick}
                      key={i}  
                    >
                      <CategorieTitleAndClues>{this.props.categoryClues[i].bible_clues[4].point_value}</CategorieTitleAndClues>
                    </Table.Cell>
                  )
                })
            }
          </Table.Row>
        </Table.Body>
      </React.Fragment>
    )
  }
}
  
const mapStateToProps = state => {
  return { 
    categoryClues: state.categoriesWithClues.categoriesWithClues,
    allClues: state.categoriesWithClues.categoriesWithClues,
    clue: state.displayAndClues.displayedClue,
    modalOpen: state.modalOpenClick.modalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    modalOpenClick,
    modalCloseClick,
    displayClue
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClueBoard));