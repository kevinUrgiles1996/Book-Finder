import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import About from './components/pages/About';
import BookInfo from './components/books/BookInfo';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/NotFound';

import BookState from './context/book/BookState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <BookState>
      <AlertState>
        <Router>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/book/:id' component={BookInfo} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </BookState>
  );
};

export default App;
