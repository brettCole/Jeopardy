import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Modal, Table } from 'semantic-ui-react';
import QuestionModalClue from '../components/QuestionModalClue';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';
import { bindActionCreators } from 'redux';
import { modalOpenClick } from '../actions';

// pass open state through to QuestionModalClue component
// pass clue through to QuestionModlaClue component

class ClueBoard extends Component {

  handleOnClick = (e) => {
    debugger;
    this.props.modalOpenClick(e);
  }

  render() {
    const arr = [0, 1, 2, 3, 4, 5];
    return (
      <React.Fragment>
        <QuestionModalClue 
          modalOpen = {this.props.modalOpen}
          clue = {this.props.categoryClues}
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
                    >
                      <CategorieTitleAndClues>200</CategorieTitleAndClues>
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
                      <CategorieTitleAndClues>400</CategorieTitleAndClues>
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
                      <CategorieTitleAndClues>600</CategorieTitleAndClues>
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
                      <CategorieTitleAndClues>800</CategorieTitleAndClues>
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
                      <CategorieTitleAndClues>1000</CategorieTitleAndClues>
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
  return { categoryClues: state.categoriesWithClues.categoriesWithClues,
    modalOpen: state.modalOpenClose.modalOpen }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    modalOpenClick, 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueBoard);