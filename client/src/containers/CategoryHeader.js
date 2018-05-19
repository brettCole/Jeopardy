import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CategoryAndValues from '../components/CategoryAndValues';

export default class CategoryHeader extends Component {

  render() {
    return (
      <Grid columns={6} divided container>
        {/* <Grid.Row color='blue'> */}
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categoryOne} />
          </Grid.Column>
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categoryTwo} />
          </Grid.Column>
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categoryThree} />
          </Grid.Column>
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categoryFour} />
          </Grid.Column>
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categoryFive} />
          </Grid.Column>
          <Grid.Column color='blue'>
            <CategoryAndValues category={this.props.categorySix} />
          </Grid.Column>
        {/* </Grid.Row> */}
      </Grid>
    )
  }
}