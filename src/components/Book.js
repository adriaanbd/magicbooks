import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book: { id, title, category }, remove } = props;
  return (
    <div className="book">
      <div className="bookInfo">
        <div className="category">{ category }</div>
        <h2 className="title">{ title }</h2>
        <div className="bookId">{ `Book ID: ${id}` }</div>
      </div>
      <div className="bookActions">
        <button className="bookAction" type="button" onClick={() => remove(id)}>Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
