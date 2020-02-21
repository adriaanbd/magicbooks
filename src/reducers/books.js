import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions';


const initialState = {
  items: [],
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
        ...state,
        loading: false,
        items: payload.books,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        items: [],
      };
    case 'CREATE_BOOK':
      return [...state, payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.bookId !== payload);
    default:
      return state;
  }
}

export default books;
