import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const { id } = book;
  const { title, authors, imageLinks } = book.volumeInfo;
  const noAvailable =
    'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg';
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
      <div className='card text-center result-card'>
        <div className='card-header text-center'>
          <p>
            <strong>
              {title.length < 45 ? title : title.substring(0, 45)}
            </strong>
          </p>
        </div>
        <div className='card-body'>
          <div className='d-flex justify-content-center'>
            <img
              src={imageLinks ? imageLinks.smallThumbnail : noAvailable}
              className='img img-fluid'
              alt='book thumbnail'
            />
          </div>

          <p>
            <br />
            {authors ? (
              <strong> {authors[0]}</strong>
            ) : (
              <strong>No author</strong>
            )}
          </p>

          <Link to={'/book/' + id} className='btn btn-info'>
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
