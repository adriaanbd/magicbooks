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

function BooksList() {
  const books = useSelector((state) => state);
  return (
    <table>
      { createTableHeader() }
      <tbody>
        { books.map((book) => <Book props={book} />) }
      </tbody>
    </table>
  );
}

export default BooksList;
