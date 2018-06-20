export function receiveCategoriesWithClues(data) {
  return dispatch => {
    dispatch({
      type: 'FETCHED_CATEGORIES_WITH_CLUES',
      payload: data
    });
    dispatch({
      type: 'CATEGORIES_WITH_CLUES_FINISHED_FETCH'
    });
  }
}

export function fetchCategoriesWithClues() {
  return dispatch => {
    dispatch({ type: 'CATEGORIES_WITH_CLUES_FETCH_LOADING' });
    return fetch('http://localhost:3001/api/v1/category.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => dispatch(receiveCategoriesWithClues(data)))
  }
}

export function modalOpenClick() {
  return dispatch => {
    dispatch({ type: 'MODAL_OPEN_AND_CLOSE' });
  }
}