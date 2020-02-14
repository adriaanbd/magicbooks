import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

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
  const { books, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  function handleChangeFilter(category) {
    dispatch(changeFilter(category));
  }

  function filteredBooks(category) {
    if (category === 'All') {
      return books;
    }
    return books.filter(book => book.category === category);
  }

  return (
    <>
      <CategoryFilter
        handleChangeFilter={handleChangeFilter}
        filter={filter}
      />
      <table>
        <thead>
          { createTableHeader() }
        </thead>
        <tbody>
          { filteredBooks(filter).map(book => (
            <Book
              key={book.bookId}
              book={book}
              remove={handleRemoveBook}
            />
          )) }
        </tbody>
      </table>
    </>
  );
}

export default BooksList;
