import React from 'react';
import { Button } from 'semantic-ui-react';

const ModalPlayerButtons = (props) => {
  const players = () => {
    let finalPlayers = [];
    for (let i = 0; i < 3; i++) {
      finalPlayers.push(
        <Button key={i} size="massive" onClick={props.playersAnswer}>Team {i + 1}</Button>
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