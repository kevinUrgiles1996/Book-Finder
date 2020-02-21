import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <Link to='/' className='btn btn-light my-2 border border-black'>
        Back To Search
      </Link>
      <div className='jumbotron my-2 border border-black'>
        <h4 className='display-4'>Page Not Found</h4>
        <p className='lead'>The page you're looking for does not exist.</p>
      </div>
    </Fragment>
  );
};

export default NotFound;
