import React, { Component } from 'react';

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
          </Table.Cell>
        )
    }
    return final
  }

  render() {
    return (

      <Table.Row>
        {/* <Table.Cell
          selectable
        > */}
          {this.players()}
        {/* </Table.Cell> */}
      </Table.Row>
    
    )
  }
}

export default TeamAndMenu;
