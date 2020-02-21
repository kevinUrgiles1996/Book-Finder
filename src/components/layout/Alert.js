import React from 'react';

const Alert = ({ msg }) => {
  return (
    msg && (
      <div className='alert alert-danger my-2' role='alert'>
        {msg}
      </div>
    )
  );
};

export default Alert;
