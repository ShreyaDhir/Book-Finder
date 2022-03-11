import 'bootstrap/dist/css/bootstrap.min.css';
// import BookList from './components/BookList';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="h-screen w-full font-mono">
      <Header />
      <Search />
      {/* <BookList /> */}
    </div>
  );
}

export default App;
