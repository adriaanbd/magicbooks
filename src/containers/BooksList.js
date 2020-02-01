import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

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
          />
        )) }
      </tbody>
    </table>
  );
}

export default BooksList;
