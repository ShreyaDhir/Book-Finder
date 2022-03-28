import 'bootstrap/dist/css/bootstrap.min.css';
// import BookList from './components/BookList';
import Header from './components/Header';
import Search from './components/Search';
import BooksApp from './components/Main';

function App() {
  return (
    <div className="h-screen w-full font-mono">
      {/* <BooksApp /> */}
      <Header />
      <Search />
      {/* <BookList /> */}
    </div>
  );
}

export default App;
