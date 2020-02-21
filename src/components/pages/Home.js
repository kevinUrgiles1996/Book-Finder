import React, { Fragment } from 'react';
import Alert from '../layout/Alert';
import SearchBar from '../books/SearchBar';
import BookContainer from '../books/BookContainer';

const Home = () => {
  return (
    <Fragment>
      <Alert />
      <SearchBar />
      <BookContainer />
    </Fragment>
  );
};

export default Home;
