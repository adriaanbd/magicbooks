import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../containers/BooksForm';

const FILTER_CATEGORIES = [...['All'], ...CATEGORIES];

function CategoryFilter(props) {
  const { filter, handleChangeFilter } = props;
  return (
    <label htmlFor="categories">
      Filter:
      <select id="filter-categories" name="filter-category" value={filter} onChange={(e) => handleChangeFilter(e.target.value)}>
        { FILTER_CATEGORIES.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>) }
      </select>
    </label>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
