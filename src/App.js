import './index.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import BookShelf from './pages/BookShelf';
import MyBooks from './pages/MyBooks';

function App() {
  return (
    <main className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="book-shelf" element={<BookShelf />} />
        <Route path="my-books" element={<MyBooks />} />
      </Routes>
      {/* <Search /> */}
      {/* <Search />
        <BookShelf />
        <MyBooks /> */}
    </main>
  );
}

export default App;
