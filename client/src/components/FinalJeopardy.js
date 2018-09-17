import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { fetchFinalBibleCategoryWithClue, modalOpenClick } from '../actions';
import { bindActionCreators } from 'redux';
import CanYouPlay from './CanYouPlay';

class FinalJeopardy extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchFinalBibleCategoryWithClue();
  }

  checkIfYourPlayingComponent = () => {
    this.props.modalOpenClick();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.categoryAndClue &&
          <Modal
            open={true}
            centered={true}
            size='large'
            dimmer='blurring'
            style={{ 'textAlign': 'center', 'marginTop': '20px', 'backgroundColor': '#2185d0', 'height': '75vh' }}
          >
            <Modal.Content
              style={{ 'backgroundColor': '#2185d0', 'color': '#fff' }}
            >
              <Modal.Header
                as='h1'
                style={{ fontSize:'5rem', 'marginTop': '15%' }}     
              >
                {this.props.categoryAndClue[0].title}
              </Modal.Header>
              <Button
                as='button'
                size='big'
                color='green'
                style={{ 'marginTop': '5%' }}
                onClick={this.checkIfYourPlayingComponent}
              >
                Everybody Ready
              </Button>
            </Modal.Content>
          </Modal>
        }
      {
        this.props.modalOpen &&
          <CanYouPlay />
      }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    categoryAndClue: state.categoriesWithClues.categoriesWithClues,
    modalOpen: state.modalOpenClick.modalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    fetchFinalBibleCategoryWithClue,
    modalOpenClick
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalJeopardy);
