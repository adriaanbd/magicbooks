import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book: { bookId, title, category }, remove } = props;
  return (
    <tr>
      <td>{ bookId }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td><button type="button" onClick={() => remove(bookId)}>Remove</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
