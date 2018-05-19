export function receiveCategoriesWithClues(data) {
  // debugger;
  return dispatch => {
    dispatch({
      type: 'FETCHED_CATEGORIES_WITH_CLUES',
      payload: data
    });
  }
}

export function fetchCategoriesWithClues() {
  return dispatch => {
    dispatch({ type: 'CATEGORIES_WITH_CLUES_FETCH_STARTED' });
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