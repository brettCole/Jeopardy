import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Modal, Table } from 'semantic-ui-react';
import ClueValue from '../components/ClueValue';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';

class ClueBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {modalOpen: true};
  }

  render() {

    const arr = [0, 1, 2, 3, 4, 5];
// debugger;
    return (
<React.Fragment>
      <Modal open={this.state.modalOpen} centered={true} size='fullscreen' dimmer='blurring'
      style={{'text-align': 'center', marginTop: '20px', 'background-color': '#00B1E1'}}>
        <Modal.Content>
          <Modal.Header>Official testing of Modal</Modal.Header>
          <Modal.Description>
            <Header>Here is some more testing script</Header>
            <p>Well what do you think about all this text I'm throwing in here</p>
            <p>Seems a little crazy right Idk well we will see what it looks like in the end.</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>


      <Table.Body>
        <Table.Row>
          {
            this.props.categorieClues &&
              arr.map((ind, i) => {
                return (
                  <Table.Cell selectable>
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
                  <Table.Cell selectable>
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
                  <Table.Cell selectable>
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
                  <Table.Cell selectable>
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
                  <Table.Cell selectable>
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
  return { categorieClues: state.categoriesWithClues.categoriesWithClues }
}

export default connect(mapStateToProps)(ClueBoard);