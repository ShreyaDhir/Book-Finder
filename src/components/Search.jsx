import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap'
import { BiSearchAlt } from "react-icons/bi";
import { GiBlackBook } from "react-icons/gi";

import Landing from "./Landing";

let API_URL = `https://www.googleapis.com/books/v1/volumes`;
let API_KEY = `AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw`

const Search = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  }

  const fetchBooks = async () => {
    // https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw&maxResults=20"

    axios.get(`${API_URL}?q=${search}&key=${API_KEY}`)
    .then(data => {
      console.log(data.data.items);
      setBooks(data.data.items);
    })
    .catch(err => {
      console.error(err);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchBooks();
  }

  return (
    <section className="hero-container">
        <h2 className="hero-title">Search your books</h2>
        <form 
          className="search-bar"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={handleChange}
            className="input"
          />
          <button 
            type="button" 
            className="hero-button"
          >
            <BiSearchAlt />
          </button>
      </form>
      <section className="book-container">
          {books.map(book => (
            <article className="book-display" key={book.id}>
              <div className="book-content">
                <img className="book-image" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title} />
                <div className="book-description">
                  <h4 className="book-title">{book.volumeInfo.title}</h4>
                  <p className="book-authors">{`${book.volumeInfo.authors}`}</p>
                  <p>
                  {readMore ? `${book.volumeInfo.description}` : `${book.volumeInfo.description.substring(0, 200)}...`}
                    <button
                      className="readmore"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? 'Read Less' : 'Read More'}
                    </button>
                  </p>
                  <div className="button-container">
                    <button className="button book-button">
                      About <GiBlackBook className="book-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
    </section>
  );
};

export default Search;
