import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from '../components/Book';
// import { removeBook, changeFilter } from '../actions/index';
// import CategoryFilter from '../components/CategoryFilter';
import { removeBook } from '../actions/index';
import BookCard from '../components/BookCard';

function BooksList() {
  const { books, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    dispatch(removeBook(book));
  }

  // function handleChangeFilter(category) {
  //   dispatch(changeFilter(category));
  // }

  function filteredBooks(category) {
    if (category === 'All') {
      return books;
    }
    return books.filter(book => book.category === category);
  }

  return (
    <>
      { filteredBooks(filter).map(book => (
        <BookCard
          key={book.bookId}
          book={book}
          remove={handleRemoveBook}
        />
      )) }
    </>
  );
}

export default BooksList;
