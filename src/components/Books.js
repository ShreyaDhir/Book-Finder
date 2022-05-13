import React, { useState } from 'react'
import Modal from './Modal';

const Books = ({ books }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {
        books.map((book) => (
        <article className="book-display" key={book.id}>
          <div className="book-content">
            <img
              className="book-image"
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.title}
            />
            <div className="book-description">
              <h4 className="book-title">{book.volumeInfo.title}</h4>
              <p className="book-authors">{`${book.volumeInfo.authors}`}</p>
              <p>
                {readMore
                  ? `${book.volumeInfo.description.slice(0, 200)}...`
                  : `${book.volumeInfo.description}`}
                <button
                  className="readmore"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read More" : "Read Less"}
                </button>
              </p>
              <div className="button-container">
                <button className="button book-button">
                  <Modal key={book.id} {...books} />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Books