import React, { useContext } from 'react';
import BookItem from './BookItem';
import Spinner from '../layout/Spinner';

import BookContext from '../../context/book/bookContext';

const Books = () => {
  const bookContext = useContext(BookContext);

  const { books, loading } = bookContext;

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
