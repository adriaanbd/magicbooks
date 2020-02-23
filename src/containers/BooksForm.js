import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

export const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const getRandId = () => {
  const randFloat = Math.random() * (100 - 0) + 0;
  return Math.floor(randFloat);
};

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
    bookData.id = getRandId();
    dispatch(createBook({ ...bookData }));
    setBookData(DEFAULT_STATE);
  }

  function setCategories() {
    return [
      ...[<option value="" selected disabled hidden>Category</option>],
      ...CATEGORIES.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
  }

  return (
    <>
      <h3 id="new-book">Add New Book: </h3>
      <form onSubmit={handleSubmit} id="new-book-form">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={bookData.title}
          onChange={handleChange}
        />
        <select id="category-select" name="category" value={bookData.category} onChange={handleChange}>
          { setCategories() }
        </select>
        <button type="submit" id="add-book-btn">Add Book</button>
      </form>
    </>
  );
}

export default BooksForm;
