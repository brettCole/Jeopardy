import React, { Component } from 'react';
import CategoryHeader from './CategoryHeader';
import ClueBoard from './ClueBoard';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoriesWithClues } from '../actions';

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoriesWithClues();
  }
  
  render() {
    return (
      <Grid rows={6}>
        <CategoryHeader />
        <ClueBoard />
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCategoriesWithClues }, dispatch);
};

export default connect(null, mapDispatchToProps)(GameBoard);