import getBooksFromAPI from '../api';

export function createBook(book) {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
}

export function removeBook(bookId) {
  return {
    type: 'REMOVE_BOOK',
    payload: bookId,
  };
}

export function changeFilter(category) {
  return {
    type: 'CHANGE_FILTER',
    payload: category,
  };
}

export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

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

export async function fetchBooks() {
  const data = await getBooksFromAPI();
  return data;
}
