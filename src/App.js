import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="h-screen w-full font-mono">
      <Header />
      <Search />
    </div>
  );
}

export default App;
