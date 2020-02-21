import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <div className='text-center w-100'>
        <img src={spinner} alt='Loading...' />
      </div>
    </Fragment>
  );
};

export default Spinner;
