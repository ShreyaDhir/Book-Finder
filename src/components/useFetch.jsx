import axios from 'axios';
import React, { useState } from 'react'

let API_URL = `https://www.googleapis.com/books/v1/volumes`;
let API_KEY = `AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw`

const useFetch = (API_URL, API_KEY) => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
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

  return {search, books}
}

export default useFetch;