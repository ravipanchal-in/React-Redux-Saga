import { useEffect } from 'react'
import { addToCart, removeFromCart, clearCart, productList } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

function Main() {

  const dispatch = useDispatch();
  const product = { id: '123', title: 'iPhone 12', brand: 'apple' }

  const products = useSelector(state => state.product)

  useEffect(() => {
    dispatch(productList())
  }, [])


  return (
    <div className="App">
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className='prdtList'>
        {products.map((item, index) => {
          return <div className='itemCard' key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} />
            <div className='itemCartFooter'>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Main;