import {
  CREATE_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './types';

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    payload: bookId,
  };
}

export function changeFilter(category) {
  return {
    type: CHANGE_FILTER,
    payload: category,
  };
}

export function fetchBooksBegin() {
  return {
    type: FETCH_BOOKS_BEGIN,
  };
}

export function fetchBooksSuccess(books) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
}

export function fetchBooksFailure(error) {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
}

// export function fetchBooks() { // this doesn't work:
//   return (dispatch) => {
//     dispatch(fetchBooksBegin);
//     try {
//       const res = axios.get('http://localhost:3000/api/v1/books');
//       dispatch(fetchBooksSuccess(res.data));
//     } catch (error) {
//       dispatch(fetchBooksFailure(error.message));
//     }
//   };
// }
