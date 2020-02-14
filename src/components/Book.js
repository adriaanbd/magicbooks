import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book: { bookId, title, category }, remove } = props;
  return (
    <div>
      <div>{ category }</div>
      <div>{ title }</div>
      <div>{ bookId }</div>
      <div><button type="button" onClick={() => remove(bookId)}>Remove</button></div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
