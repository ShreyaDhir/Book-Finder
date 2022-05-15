import Header from './components/Header';
import Search from './components/Search';
import './index.css'
import BookShelf from './pages/BookShelf';
import MyBooks from './pages/MyBooks';

function App() {
  return (
    <main className="app-container">
      <Header />
      <Search />
      <BookShelf />
      <MyBooks />
    </main>
  );
}

export default App;
