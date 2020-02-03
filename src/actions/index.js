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
