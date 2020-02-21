import React from 'react';
import { Link } from 'react-router-dom';
import logo from './book.svg';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-primary '>
      <div className='container'>
        <Link to='/' className='navbar-brand  text-white'>
          <img src={logo} alt='app logo' />
          <strong> Book Finder</strong>
        </Link>

        <div className='navbar-nav'>
          <Link className='nav-item nav-link active text-white' to='/about'>
            <strong>About</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
