import React from 'react';
import BookItem from './BookItem';
import Spinner from '../layout/Spinner';

const Books = ({ books, loading }) => {
  if (loading) return <Spinner />;

  return (
    <div className='row'>
      {books.map(book => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Books;
