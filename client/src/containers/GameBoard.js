import React, { Component } from 'react';
import CategoryHeader from './CategoryHeader';
import ClueBoard from './ClueBoard';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoriesWithClues } from '../actions';

class GameBoard extends Component {

  componentDidMount() {
    this.props.fetchCategoriesWithClues();
  }
  
  render() {
    return (
      <Table
        color={'blue'}
        columns={6}
        celled
        inverted
        className='complete'
        textAlign='center'
        size='large'
      >
        <CategoryHeader />
        <ClueBoard />
      </Table>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchCategoriesWithClues,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(GameBoard);