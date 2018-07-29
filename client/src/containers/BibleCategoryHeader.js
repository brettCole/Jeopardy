import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CategoryTitleAndClues from '../components/CategoryTitleAndClues';

class BibleCategoryHeader extends Component {
  render() {
    return (
      <Table.Header>
        <Table.Row>
          {
            this.props.categoryTitles && 
              this.props.categoryTitles.map((category, i) => {
                return (
                  <Table.HeaderCell
                    key={i}
                  >
                    <CategoryTitleAndClues>
                      {category.title}
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

export default connect(mapStateToProps)(BibleCategoryHeader);