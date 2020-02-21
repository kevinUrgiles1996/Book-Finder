import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { msg } = alertContext;
  return (
    msg && (
      <div className='alert alert-danger my-2' role='alert'>
        {msg}
      </div>
    )
  );
};

export default Alert;
