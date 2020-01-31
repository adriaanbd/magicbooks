import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './components/BooksForm';

export default function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}
