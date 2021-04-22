import './App.css';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <NotFound></NotFound>
        <Footer></Footer>
    </div>
  );
}

export default App;
