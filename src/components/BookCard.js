import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookCard(props) {
  const { book, remove } = props;
  return (
    <div className="bookCard">
      <div id="card-left">
        <Book
          book={book}
          remove={remove}
        />
      </div>
      <div id="card-right">Right</div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default BookCard;
