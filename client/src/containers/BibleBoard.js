import React, { Component } from 'react';
import BibleCategoryHeader from './BibleCategoryHeader';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBibleCategoriesWithClues } from '../actions';
import ClueBoard from './ClueBoard';
import TeamAndMenu from './TeamAndMenu';

class BibleBoard extends Component {

  componentDidMount() {
    this.props.fetchBibleCategoriesWithClues();
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
        structured
      >
        <BibleCategoryHeader />
        <ClueBoard />
        <TeamAndMenu />
      </Table>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchBibleCategoriesWithClues,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(BibleBoard);