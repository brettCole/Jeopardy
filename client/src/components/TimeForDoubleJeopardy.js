import React from 'react'
import { Button, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TimeForDoubleJeopardy = (props) => {
  return (
    <Modal
      open={true}
      centered={true}
      size='fullscreen'
      dimmer='blurring'
      style={{ 'textAlign': 'center', 'marginTop': '20px', 'backgroundColor': '#2185d0' }} 
    >
      <Modal.Content
      style={{ 'backgroundColor': '#2185d0', 'color': '#fff' }}
      >
        <Modal.Header
          as='h1'
          style={{ fontSize:'4rem' }}
        >
          {props.header}
        </Modal.Header>
        <div>
          <Button
            as='button'
            size='huge'
            color='green'
          >
            <Link style={{ color:'#fff' }} to={props.linkBoard}>{props.linkTitle}</Link>
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default TimeForDoubleJeopardy;