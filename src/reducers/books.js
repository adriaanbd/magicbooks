import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions/types';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

function books(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        error: null,
        books: payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        error: payload.error,
        books: [...state.books],
      };
    case 'CREATE_BOOK':
      return {
        loading: false,
        error: null,
        books: [...state.books, payload],
      };
    case 'REMOVE_BOOK':
      return {
        loading: false,
        error: null,
        books: state.books.filter(book => book.id !== payload),
      };
    default:
      return state;
  }
}

export default books;
