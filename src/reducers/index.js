import { combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
import books from './books';
import filter from './filter';

const rootReducer = combineReducers({
  books,
  filter,
});

const store = createStore(rootReducer);
export default store;
