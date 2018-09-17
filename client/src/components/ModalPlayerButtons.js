import React from 'react';
import { Button } from 'semantic-ui-react';

const ModalPlayerButtons = (props) => {
  const players = () => {
    let teams = ['Am-haarets', 'Gadites', 'Beroeans']
    let finalPlayers = [];
    for (let i = 0; i < teams.length; i++) {
      finalPlayers.push(
        <Button 
          key={i}
          size="massive"
          style={{ fontSize: '3rem' }}
          onClick={props.playersAnswer}
        >
          {teams[i]}
        </Button>
      )
    }
    return finalPlayers
  }
  

  return (
    <Button.Group color='blue' as='h2'>
      {players()}
    </Button.Group>
  )
}

export default ModalPlayerButtons;