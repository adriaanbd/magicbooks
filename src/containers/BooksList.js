import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  removeBook,
  changeFilter,
  fetchBooksBegin,
  fetchBooksSuccess,
  fetchBooksFailure,
  // fetchBooks, // doesnt make api call
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

  useEffect(() => {
    dispatch(fetchBooksBegin);
    (async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/v1/books');
        const data = await res.data;
        dispatch(fetchBooksSuccess(data));
      } catch (error) {
        dispatch(fetchBooksFailure(error.message));
      }
    })();
  }, []);

  // useEffect(() => { // doesnt make api call
  //   fetchBooks(dispatch);
  // }, [books]);

  function filteredBooks(category) {
    const booksArray = [...books.books];
    if (category === 'All') {
      return booksArray;
    }
    return booksArray.filter(book => book.category === category);
  }

  return (
    <>
      <CategoryFilter
        handleChangeFilter={handleChangeFilter}
        filter={filter}
      />
      { filteredBooks(filter).map(book => (
        <BookCard
          key={book.id}
          book={book}
          remove={handleRemoveBook}
        />
      )) }
    </>
  );
}

export default BooksList;
