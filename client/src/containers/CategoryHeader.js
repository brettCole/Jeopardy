import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CategoryTitleAndClues from '../components/CategoryTitleAndClues';

class CategoryHeader extends Component {

  render() {
    const categories = ['category_one', 'category_two', 'category_three', 'category_four', 'category_five', 'category_six'];

    return (
      <Table.Header>
        <Table.Row> 
          {
            this.props.categoryTitles && 
              categories.map((category, i) => {
                return (
                  <Table.HeaderCell 
                    key={i}
                  >
                    <CategoryTitleAndClues>
                      {this.props.categoryTitles[category].options.title}
                    </CategoryTitleAndClues>
                  </Table.HeaderCell>
                )
              })
          }
        </Table.Row> 
      </Table.Header>
    )
  }
}

const mapStateToProps = state => {
  return { categoryTitles: state.categoriesWithClues.categoriesWithClues }
}

CategoryHeader.propTypes = {
  categoryTitles: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(CategoryHeader);
