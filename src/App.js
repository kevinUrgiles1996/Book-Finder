import './App.css';
import React, { useState, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import SearchBar from './components/books/SearchBar';
import BookContainer from './components/books/BookContainer';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import BookInfo from './components/books/BookInfo';
import PageNotFound from './components/pages/NotFound';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    console.log(123);
  }, []);

  const searchBooks = async text => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=` +
          text +
          `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await res.json();
      setData(data.items);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const clearBooks = () => {
    setData([]);
  };

  const showAlert = msg => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const getBookDetails = async id => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/` + id
      );

      const data = await res.json();
      setBookDetails(data.volumeInfo);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <Alert msg={alert} />
                <SearchBar
                  searchBooks={searchBooks}
                  clearBooks={clearBooks}
                  showClear={data.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <BookContainer books={data} loading={loading} />
              </Fragment>
            )}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/book/:id'
            render={props => (
              <BookInfo
                loading={loading}
                getBookDetails={getBookDetails}
                bookDetails={bookDetails}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
