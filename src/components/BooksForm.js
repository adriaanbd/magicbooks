import React, { useState } from 'react';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function BooksForm() {
  const [bookData, setBookData] = useState({ title: '', category: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setBookData(prevBookData => ({
      ...prevBookData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevents browser reload
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
