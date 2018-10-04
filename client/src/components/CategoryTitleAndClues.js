import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';

const CategoryTitleAndClues = (props) => {
  return (
    <Item>
      <Item.Content>
        {
          props.what ? (
            <Fragment>
              <Item.Header as='h1' style={{ 'display': 'inline', 'marginLeft': '25%', 'fontSize':'xxx-large' }}>200</Item.Header>
              <Item.Header as='h1' style={{ 'display': 'inline', 'marginRight': '25%', 'fontSize': 'xxx-large' }}>{props.children}</Item.Header>
            </Fragment>
          ) : (
            <Item.Header as='h1' style={{ 'fontSize':'3rem', fontWeight:'bold', 'color':'white' }}>
              {props.children}
            </Item.Header>
          )
        }
      </Item.Content>
    </Item>
  )
}

export default CategoryTitleAndClues;