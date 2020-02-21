import React, { useEffect, useContext, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

import BookContext from '../../context/book/bookContext';

const BookInfo = () => {
  const bookContext = useContext(BookContext);

  const { book, getBook, loading } = bookContext;

  const { id } = useParams();

  const {
    title,
    authors,
    description,
    imageLinks,
    publisher,
    publishedDate,
    categories
  } = book;

  const noAvailable =
    'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg';

  const previewLink =
    'https://books.google.com.ec/books?id=' + id + '&printsec=frontcover';

  useEffect(() => {
    getBook(id);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light my-2 border border-black'>
        Back To Search
      </Link>
      <div className='card mb-4'>
        <div className='card-header text-center'>
          <h4>{title}</h4>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6 p-4'>
              <div className='col ml-2'>
                <h3>Book Info</h3>
              </div>
              <hr />
              <div className='row'>
                <div className='col mt-4 ml-4'>
                  <p>
                    <strong>Author: </strong>
                    {authors !== undefined
                      ? ` ${authors[0]}`
                      : 'No information'}
                  </p>
                  <p>
                    <strong>Publisher: </strong>
                    {publisher !== undefined
                      ? ` ${publisher}`
                      : 'No information'}
                  </p>
                  <p>
                    <strong>Published Date: </strong>
                    {publishedDate !== undefined
                      ? ` ${publishedDate}`
                      : 'No information'}
                  </p>
                  <a
                    href={previewLink}
                    className='btn btn-primary my-3'
                    // eslint-disable-next-line
                    target='_blank'
                  >
                    Google Book Preview
                  </a>
                </div>
                <div className='col text-center mt-4'>
                  <img
                    src={imageLinks ? imageLinks.thumbnail : noAvailable}
                    className='img img-fluid border border-dark'
                    alt='book thumbnail'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col m-4'>
                  <h3 className=''>Categories</h3>
                  <hr />

                  {categories !== undefined
                    ? categories.map((categorie, index) => {
                        return (
                          <p key={index} className='pt-1'>
                            {categorie}
                          </p>
                        );
                      })
                    : 'No information'}
                  <br />
                </div>
              </div>
            </div>
            <div className='col-md-6 p-4'>
              <h3 className='col ml-2'>Description</h3>
              <hr />
              {description ? (
                <div
                  className='text-justify p-4'
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              ) : (
                <p>No information</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookInfo;
