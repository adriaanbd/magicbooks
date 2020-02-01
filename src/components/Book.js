import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    id, title, category, remove,
  } = props;
  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td><button type="button" onClick={() => remove(id)}>Remove</button></td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
