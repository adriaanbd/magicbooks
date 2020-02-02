export function createBook(book) {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
}

export function removeBook(book) {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  };
}
