import React from 'react';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function createCategories() {
  return (
    <div>
      <label htmlFor="categories" />
          Category:
      <select id="categories">
        { CATEGORIES.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>) }
      </select>
    </div>
  );
}

function BooksForm() {
  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" />
      </label>
      { createCategories() }
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BooksForm;
