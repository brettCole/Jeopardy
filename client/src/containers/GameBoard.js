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
    debugger;
    return (
      <Grid>
        <CategoryHeader categoriesWithClues={this.props.categories} />
        <ClueBoard />
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categoriesWithClues.categoriesWithClues }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCategoriesWithClues }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);