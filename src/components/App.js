import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <BooksList />
      <BooksForm />
    </>
  );
}

export default App;
