import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import CategorieTitleAndClues from '../components/CategoryTitleAndClues';

class TeamAndMenu extends Component {

  players = () => {
    let final = [];
    for (let i = 0; i < 3; i++) {
        final.push(
          <Table.Cell
            selectable
            colSpan="2"
          >
            <CategorieTitleAndClues>
              Team {i + 1}
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
