import React from 'react-dom';
import { useSelector } from 'react-redux';
import Book from './Book';

function createTableHeader() {
  return (
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
  );
}

function createBooks() {
  const books = useSelector((state) => state);
  return (
    books.map((book) => <Book props={book} />)
  );
}

function BooksList() {
  return (
    <table>
      { createTableHeader() }
      { createBooks() }
    </table>
  );
}

export default BooksList;
