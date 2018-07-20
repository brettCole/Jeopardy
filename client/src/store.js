import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// reducers
import loadingNotLoading from './reducers/loadingNotLoading';
import categoriesWithClues from './reducers/categoriesWithClues';
import modalOpenClick from './reducers/modalOpenClick';
import displayAndClues from './reducers/displayAndCountClues';
import currentPlayer from './reducers/currentPlayer';
import teamScores from './reducers/teamScores';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  loadingNotLoading,
  categoriesWithClues,
  displayAndClues,
  modalOpenClick,
  currentPlayer,
  teamScores,
  form: formReducer
})

const middleware = [thunkMiddleware, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store;