import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <BooksList />
        <BooksForm />
      </main>
    </>
  );
}

export default App;
