import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <Link to='/' className='btn btn-light my-2 border border-black'>
        Back To Search
      </Link>
      <div className='jumbotron my-2 border border-black'>
        <h4 className='display-4'>About this App</h4>
        <p className='lead'>
          This is a simple frontend application built with React.
        </p>
        <hr className='my-4' />
        <p>
          It uses the <strong>Google Books API</strong> to search any
          information related to books.
        </p>
        <p>
          You can use this app by just typing a book name, an author or
          something related to a topic.
        </p>
        <p className='lead'>
          <a
            className='btn btn-primary btn-lg'
            href='https://developers.google.com/books'
            role='button'
            // eslint-disable-next-line
            target='_blank'
          >
            API Documentation
          </a>
        </p>
        <p className='d-flex justify-content-end'>
          <strong>Developed by Kevin Urgilés</strong>
        </p>
      </div>
    </Fragment>
  );
};

export default About;
