import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';

const CategoryTitleAndClues = (props) => {
  return (
    <Item>
      <Item.Content>
        {
          props.what ? (
            <Fragment>
              <Item.Header as='h1' style={{ 'display': 'inline', 'marginRight': '25%' }}>{props.children}</Item.Header>
              <Item.Header as='h1' style={{ 'display': 'inline', 'marginLeft': '25%' }}>200</Item.Header>
            </Fragment>
          ) : (
            <Item.Header as='h1'>
              {props.children}
            </Item.Header>
          )
        }
      </Item.Content>
    </Item>
  )
}

export default CategoryTitleAndClues;