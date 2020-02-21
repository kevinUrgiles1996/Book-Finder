import React, { Fragment, useState, useContext } from 'react';
import BookContext from '../../context/book/bookContext';
import AlertContext from '../../context/alert/alertContext';

const SearchBar = () => {
  const alertContext = useContext(AlertContext);
  const bookContext = useContext(BookContext);

  const { searchBooks, clearBooks, books } = bookContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please, enter something');
    } else {
      searchBooks(text);
    }
  };
  return (
    <Fragment>
      <div className='row my-4'>
        <div className='col-md-6 col-sm-8 mx-auto'>
          <div className='card '>
            <div className='card-body'>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name=''
                    onChange={onChange}
                    placeholder='Search for any book, author or review'
                  />
                </div>

                <button type='submit' className='btn btn-primary btn-block'>
                  Search
                </button>
              </form>
              {books.length > 0 && (
                <button
                  onClick={clearBooks}
                  className='btn btn-light border border-black btn-block my-2'
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
