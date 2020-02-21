import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchBooks, clearBooks, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please, enter something');
    } else {
      searchBooks(text);
      setText('');
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
              {showClear && (
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

SearchBar.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  clearBooks: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default SearchBar;
