import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';

class TeamAndMenu extends Component {

  players = () => {
    let final = [];
    let teams = ['Am-haarets', 'Gadites', 'Beroeans'];
    for (let i = 0; i < teams.length; i++) {
        final.push(
          <Table.Cell
            selectable
            colSpan="2"
          >
            <CategorieTitleAndClues>
              {teams[i]}
            </CategorieTitleAndClues>
            <CategorieTitleAndClues>
              {Object.values(this.props.score[i])}
            </CategorieTitleAndClues>
          </Table.Cell>
        )
    }
    return final
  }

  render() {
    return (
      <Table.Row>
          {this.players()}
      </Table.Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    score: state.teamScores
  }
}

export default connect(mapStateToProps)(TeamAndMenu);
