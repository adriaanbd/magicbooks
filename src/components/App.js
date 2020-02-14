import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <div id="panel">
      <Nav />
      <main>
        <BooksList />
        <BooksForm />
      </main>
    </div>
  );
}

export default App;
