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

export function receiveDoubleBibleCategoriesWithClues(data) {
  return dispatch => {
    dispatch({
      type: 'FETCHED_DOUBLE_BIBLE_CATEGORIES_WITH_CLUES',
      payload: data
    });
    dispatch({
      type: 'CATEGORIES_WITH_CLUES_FINISHED_FETCH'
    });
  }
}

export function receiveFinalBibleCategoryWithClue(data) {
  return dispatch => {
    dispatch({
      type: 'FETCHED_FINAL_BIBLE_CATEGORY_WITH_CLUE',
      payload: data
    });
    dispatch({
      type: 'CATEGORIES_WITH_CLUES_FINISHED_FETCH'
    });
  }
}

// fetch categories w/clues from jService
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

// fetch Bible Categories w/Clues
export function fetchBibleCategoriesWithClues() {
  return dispatch => {
    dispatch({ type: 'BIBLE_CATEGORIES_WITH_CLUES_FETCH_LOADING' });
    return fetch('http://localhost:3001/bible_categories.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content_type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => dispatch(receiveCategoriesWithClues(data)))
  }
}

// fetch Double Bible Categories w/Clues
export function fetchDoubleBibleCategoriesWithClues() {
  return dispatch => {
    dispatch({ type: 'DOUBLE_BIBLE_CATEGORIES_WITH_CLUES_FETCH_LOADING' });
    return fetch('http://localhost:3001/bible_categories.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content_type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => dispatch(receiveDoubleBibleCategoriesWithClues(data)))
  }
}

// fetch Final Jeopardy Category with Clue
export function fetchFinalBibleCategoryWithClue() {
  return dispatch => {
    dispatch({ type: 'FETCHED_FINAL_BIBLE_JEOPARDY_CATEGORY_WITH_CLUE' });
    return fetch('http://localhost:3001/bible_categories.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content_type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(receiveFinalBibleCategoryWithClue(data)))
  }
}

// open modal with clue
export function modalOpenClick() {
  return dispatch => {
    dispatch({ type: 'MODAL_OPEN' });
  }
}

// close modal and clear clue
export function modalCloseClick() {
  return dispatch => {
    dispatch({ type: 'MODAL_CLOSE'
  });
  dispatch({ type: 'CLEAR_CLUE'});
  dispatch({ type: 'REMOVE_CURRENT_PLAYER'});
  }
}

// display current clue
export function displayClue(data) {
  return dispatch => {
    dispatch({ 
      type: 'DISPLAY_CLUE',
      payload: data
    });
    dispatch({ type: 'REMOVE_CLUE_FROM_ALL_CLUES' });
  }
}

// change clue value to null after showing and guessing clue
export function resetPointValue(data) {
  return dispatch => {
    dispatch({
      type: 'ZERO_POINT_VALUE',
      payload: data
    })
  }
}

// hold current player
export function currentPlayer(data) {
  return dispatch => {
    dispatch({
      type: 'CURRENT_PLAYER',
      payload: data
    });
  }
}

// remove current player from redux store
export function removeCurrentPlayer() {
  return dispatch => {
    dispatch({
      type: 'REMOVE_CURRENT_PLAYER'
    });
  }
}

// pass score to team
export function addToTeamScore(playerGuessing, point_value) {
  return dispatch => {
    dispatch({
      type: 'ADD_TO_TEAMS_SCORE',
      playerGuessing: playerGuessing,
      point_value: point_value
    });
  }
}

// add final wager to teamScore
export function addFinalWagerToTeamScore(playerGuessing, point_value) {
  return dispatch => {
    dispatch({
      type: 'ADD_FINAL_WAGER_TO_TEAM_SCORE',
      playerGuessing,
      point_value
    })
  }
}

// subtract final wager from teamScore
export function subtractFinalWagerFromTeamScore(playerGuessing, point_value) {
  return dispatch => {
    dispatch({
      type: 'SUBTRACT_FINAL_WAGER_FROM_TEAM_SCORE',
      playerGuessing,
      point_value
    })
  }
}

// subtract score from team
export function subtractFromTeamScore(playerGuessing, point_value) {
  return dispatch => {
    dispatch({
      type: 'SUBTRACT_FROM_TEAM_SCORE',
      playerGuessing: playerGuessing,
      point_value: point_value
    });
  }
}

// you are playing in final jeopardy
export function yourPlayingFinal(player) {
  return dispatch => {
    dispatch({
      type: 'YOUR_PLAYING_IN_FINAL',
      player: player
    });
  }
}

// your not playing in final jeopardy
export function yourNotPlayingFinal(player) {
  return dispatch => {
    dispatch({
      type: 'YOUR_NOT_PLAYING_IN_FINAL',
      player: player
    });
  }
}

// final jeopardy players make wagers
export function makeWagers(player, wager) {
  return dispatch => {
    dispatch({
      type: 'MAKE_YOUR_WAGER',
      player,
      wager
    })
  }
}