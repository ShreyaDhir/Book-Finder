import React, { useState } from "react";
import Modal from "./Modal";

const Books = ({ books }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {books.map((book) => (
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
               {readMore ? `${book.volumeInfo.description}`: ''}
                <button
                  className="readmore"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less" : "Read the Description"}
                </button>
              </p>
              <div className="button-container">
                <button className="button book-button">
                  <Modal
                    key={book.id}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    bookUrl={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors}
                    pageCount={book.volumeInfo.pageCount}
                    publishedDate={book.volumeInfo.publishedDate}
                  />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Books;
