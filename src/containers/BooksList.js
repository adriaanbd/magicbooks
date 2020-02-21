import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeBook,
  changeFilter,
  fetchBooks,
  // fetchBooksBegin 
} from '../actions/index';
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

  // function handleFetchBooks() {
  //   dispatch(fetchBooksBegin());
  // }

  useEffect(
    () => {
      // handleFetchBooks();
      fetchBooks();
    }, [],
  );

  function filteredBooks(category) {
    if (category === 'All') {
      return books.items;
    }
    return books.items.filter(book => book.category === category);
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
