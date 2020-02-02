import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book: { bookId, title, category } } = props;
  return (
    <tr>
      <td>{ bookId }</td>
      <td>{ title }</td>
      <td>{ category }</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
