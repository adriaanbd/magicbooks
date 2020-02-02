import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function createTableHeader() {
  return (
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
  );
}

function BooksList() {
  const { books } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  return (
    <table>
      <thead>
        { createTableHeader() }
      </thead>
      <tbody>
        { books.map(book => (
          <Book
            key={book.bookId}
            book={book}
            remove={handleRemoveBook}
          />
        )) }
      </tbody>
    </table>
  );
}

export default BooksList;
