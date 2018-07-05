import React from 'react';
import { Button } from 'semantic-ui-react';

const ModalPlayerButtons = (props) => {
  return (
    <Button.Group color='blue' as='h2'>
      <Button size="massive">Player 1</Button>
      <Button size="massive">Player 2</Button>
      <Button size="massive">Player 3</Button>
    </Button.Group>
  )
}

export default ModalPlayerButtons;