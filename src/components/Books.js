import React, { useState } from 'react'
import Modal from './Modal';

const Books = ({ books }) => {
  const [readMore, setReadMore] = useState(false);

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {books.map((book) => (
        <article className="book-display" key={book.id}>
          <div className="book-content">
            <img
              onClick={() => {
                setShow(true);
                setItem(book);
              }}
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
                  <Modal
                    show={show}
                    item={bookItem}
                    onClose={() => setShow(false)}
                    // key={book.id}
                  />
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