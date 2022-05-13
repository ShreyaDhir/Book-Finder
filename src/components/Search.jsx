import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { BiSearchAlt } from "react-icons/bi";
import { GiBlackBook } from "react-icons/gi";
import Books from "./Books";

// import Landing from "./Landing";

let API_URL = `https://www.googleapis.com/books/v1/volumes`;
let API_KEY = `AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw`;

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    axios.get(`${API_URL}?q=${search}&key=${API_KEY}`)
      .then((book) => {
        console.log(book.data.items);
        setBooks(book.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // useEffect(() => {
  //   fetchBooks();
  // }, [])

  const handleChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchBooks();
  };

  return (
    <section className="hero-container">
      <h2 className="hero-title">Search your books</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="hero-button">
          <BiSearchAlt />
        </button>
      </form>
      <section className="book-container">
        <Books books={books}/>
      </section>
    </section>
  );
};

export default Search;
