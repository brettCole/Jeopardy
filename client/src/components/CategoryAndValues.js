import React from 'react';
import { Item } from 'semantic-ui-react';

const CategoryAndValues = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='h2'>{props.categoryTitle.options.title}</Item.Header>
      </Item.Content>
    </Item>
  )
}

export default CategoryAndValues;