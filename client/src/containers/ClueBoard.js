import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Table } from 'semantic-ui-react';
import ClueValue from '../components/ClueValue';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';

class ClueBoard extends Component {

  test = (e) => {
    debugger;
      <Modal>Testing</Modal>
  }

  render() {

    const arr = [0, 1, 2, 3, 4, 5];

    return (
      <Table.Body>
        <Table.Row>
          {
            this.props.categorieClues &&
            arr.map((ind, i) => {
              return (
              <Table.Cell selectable onClick={ this.test }>
                <CategorieTitleAndClues>200</CategorieTitleAndClues>
              </Table.Cell>
              )
            })
          }
        </Table.Row>
        <Table.Row>
          {
            this.props.categorieClues &&
            arr.map((ind, i) => {
              return (
              <Table.Cell selectable onClick={ this.test }>
                <CategorieTitleAndClues>400</CategorieTitleAndClues>
              </Table.Cell>
              )
            })
          }
        </Table.Row>
        <Table.Row>
          {
            this.props.categorieClues &&
            arr.map((ind, i) => {
              return (
              <Table.Cell selectable onClick={ this.test }>
                <CategorieTitleAndClues>600</CategorieTitleAndClues>
              </Table.Cell>
              )
            })
          }
        </Table.Row>
        <Table.Row>
          {
            this.props.categorieClues &&
            arr.map((ind, i) => {
              return (
              <Table.Cell selectable onClick={ this.test }>
                <CategorieTitleAndClues>800</CategorieTitleAndClues>
              </Table.Cell>
              )
            })
          }
        </Table.Row>
        <Table.Row>
          {
            this.props.categorieClues &&
            arr.map((ind, i) => {
              return (
              <Table.Cell selectable onClick={ this.test }>
                <CategorieTitleAndClues>1000</CategorieTitleAndClues>
              </Table.Cell>
              )
            })
          }
        </Table.Row>
      </Table.Body>
    )
  }
}
  
const mapStateToProps = state => {
  return { categorieClues: state.categoriesWithClues.categoriesWithClues }
}

export default connect(mapStateToProps)(ClueBoard);