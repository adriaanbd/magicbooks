import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  removeBook,
  changeFilter,
  fetchBooksBegin,
  fetchBooksSuccess,
  fetchBooksFailure,
} from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import BookCard from '../components/BookCard';

function BooksList() {
  const { books, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleRemoveBook(book) {
    // dispatch begin
    console.log(book);
    (async () => {
      try {
        const resp = await axios.delete(`http://localhost:4000/api/v1/books/${book}`);
        if (resp.status === 200) {
          dispatch(removeBook(book));
        }
      } catch (error) {
        console.log(error);
        // dispatch failure
      }
    })();
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

  function filteredBooks(category) {
    const booksArray = [...books.books];
    if (category === 'All') {
      return booksArray;
    }
    return booksArray.filter(book => book.category.toLowerCase() === category.toLowerCase());
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
