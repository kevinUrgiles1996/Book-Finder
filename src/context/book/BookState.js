import React, { useReducer } from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';

import { SEARCH_BOOKS, GET_BOOK, CLEAR_BOOKS, SET_LOADING } from '../types';

const BookState = props => {
  const initialState = {
    books: [],
    book: {},
    loading: false
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  //Search Books
  const searchBooks = async text => {
    try {
      setLoading();
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=` +
          text +
          `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await res.json();
      dispatch({ type: SEARCH_BOOKS, payload: data.items });
    } catch (err) {
      console.error(err);
    }
  };

  // Get Book

  const getBook = async id => {
    try {
      setLoading();
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/` + id
      );

      const data = await res.json();
      dispatch({ type: GET_BOOK, payload: data.volumeInfo });
    } catch (err) {
      console.error(err);
    }
  };

  // Clear Books

  const clearBooks = () => dispatch({ type: CLEAR_BOOKS });

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        book: state.book,
        loading: state.loading,
        setLoading,
        searchBooks,
        getBook,
        clearBooks
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
