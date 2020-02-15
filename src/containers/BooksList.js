import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import BookCard from '../components/BookCard';

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
