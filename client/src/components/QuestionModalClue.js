import React from 'react';
import { Modal } from 'semantic-ui-react';

const QuestionModalClue = (props) => {
  return (
    <Modal open={props.modalOpen} centered='true' size='fullscreen' dimmer='blurring'
    style={{'textAlign': 'center', marginTop: '20px', 'backgroundColor': '#00B1E1'}}>
      <Modal.Content>
        <Modal.Header>[props.clue}</Modal.Header>
      </Modal.Content>
    </Modal>
  )
}

export default QuestionModalClue;