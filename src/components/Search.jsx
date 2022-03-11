import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap'

let API_URL = `https://www.googleapis.com/books/v1/volumes`;
let API_KEY = `AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw`

const Search = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [apiKey, setApiKey] = useState(`${API_KEY}`);

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
    <div className="flex flex-col">
      <div className="relative p-36">
        <h2 htmlFor="search">Search your books</h2>
        <form 
          className="form-group flex border-0"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="Search"
            onChange={handleChange}
            className="form-control p-2 transition ease-in-out m-0 border-2 border-slate-200 rounded focus:text-gray-700 focus:bg-white focus:shadow-slate-100 focus:outline-none"
          ></input>
          <button 
            type="button" 
            className="flex flex-row btn bg-blue-600"
          >
            <ion-icon name="search"></ion-icon>
          </button>
        </form>

        <section className="flex flex-wrap pt-24 basis-8">
          {books.map(book => (
          <section className="p-4" key={book.id}>
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title}/>
              <Button className="mt-4" variant="primary" onClick={handleShow}>
                About the book
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
          </section>
          ))}
        </section>
      </div>
      
    </div>
  );
};

export default Search;
