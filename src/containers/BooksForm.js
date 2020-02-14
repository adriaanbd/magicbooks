import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
import { getRandId } from '../reducers/books';

export const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const DEFAULT_STATE = { title: '', category: 'Action' };

function BooksForm() {
  const [bookData, setBookData] = useState(DEFAULT_STATE);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    setBookData(prevBookData => ({
      ...prevBookData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevents browser reload
    dispatch(createBook({ bookId: getRandId(), ...bookData }));
    setBookData(DEFAULT_STATE);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={bookData.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="categories">
          Category:
          <select id="categories" name="category" value={bookData.category} onChange={handleChange}>
            { CATEGORIES.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>) }
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default BooksForm;
