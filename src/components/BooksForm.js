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
    <select>
      <label htmlFor="categories">
        Category:
        { CATEGORIES.map((cat) => <option value={cat}>{cat}</option>) }
      </label>
    </select>
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
