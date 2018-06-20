import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// reducers
import loadingNotLoading from './reducers/loadingNotLoading';
import categoriesWithClues from './reducers/categoriesWithClues';
import modalOpenClick from './reducers/modalOpenClick';

const reducers = combineReducers({
  loadingNotLoading,
  categoriesWithClues,
  modalOpenClick
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