import { addToCart } from './redux/actions'
import { useDispatch } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import Main from './components/main';

function App() {

  const dispatch = useDispatch();
  const product = {
    title: 'iPhone 12', brand: 'apple'
  }
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
