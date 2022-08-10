import { addToCart, removeFromCart } from '../redux/actions'
import { useDispatch } from 'react-redux';

function Main() {

  const dispatch = useDispatch();
  const product = { id: '123', title: 'iPhone 12', brand: 'apple' }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button>
      {/* <button onClick={() => dispatch(clearCart(product))}>Clear Cart</button> */}
    </div>
  );
}

export default Main;