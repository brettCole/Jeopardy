import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CategoryAndValues from '../components/CategoryAndValues';

class CategoryHeader extends Component {

  render() {

    const categories = ['category_one', 'category_two', 'category_three', 'category_four', 'category_five', 'category_six'];
// debugger;
    return (
      <Grid  columns={6} divided container>
        {
          this.props.categorieTitles &&
            categories.map((category, i) => {
              return (
                <Grid.Column 
                  key={i} 
                  color='blue'
                >
                  <CategoryAndValues
                    key={i} 
                    categoryTitle={ this.props.categorieTitles[category] }
                  />
                </Grid.Column>
              )
            })
        }
      </Grid> 
    )
  }
}

const mapStateToProps = state => {
  return { categorieTitles: state.categoriesWithClues.categoriesWithClues }
}

CategoryHeader.propTypes = {
  categoryTitles: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(CategoryHeader);
