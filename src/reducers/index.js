import { combineReducers, createStore } from 'redux';
import books from './books';

// for now, it will only contain the books.js reducer.
const rootReducer = combineReducers({
  books,
});

const store = createStore(rootReducer);
export default store;
