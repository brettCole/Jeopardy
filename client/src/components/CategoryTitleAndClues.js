import React from 'react';
import { Item } from 'semantic-ui-react';

const CategoryTitleAndClues = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='h2'>{props.children}</Item.Header>
      </Item.Content>
    </Item>
  )
}

export default CategoryTitleAndClues;