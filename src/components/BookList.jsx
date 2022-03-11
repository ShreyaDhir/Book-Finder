// import axios from 'axios';
// import React, { useState } from 'react'
// import useFetch from './useFetch';

// // let API_URL = `https://www.googleapis.com/books/v1/volumes`;
// let API_KEY = `AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw`


// const BookList = () => {
//   const [search, setSearch] = useState('');
//   const [books, setBooks] = useState([]);
  
//   const fetchBooks = async () => {
//     // https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyDJCvTsy60hDaYTnhMrB7i8Qm9LTJQgqRw&maxResults=20"

//     axios.get(`${API_URL}?q=${search}&key=${API_KEY}`)
//     .then(data => {
//       console.log(data.data.items);
//       setBooks(data.data.items);
//     })
//     .catch(err => {
//       console.error(err);
//     });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchBooks();
//   }
//   const {} = useFetch(`https://www.googleapis.com/books/v1/volumes${API_KEY}`)

//   return (
//     <div className="pt-24 basis-8">
//         {books.map(book => (
//         <div className="pb-4" key={book.id}>
//             <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title}/>
//         </div>
//         ))}
//     </div>
//   )
// }

// export default BookList