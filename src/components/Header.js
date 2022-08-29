import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const cartData = useSelector(state => state.cart);
  console.log(cartData);
  return (
    <header className='header'>
      <div className='cart-div'>
        <span>{cartData.length}</span>
        <img src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' alt='cart' />
      </div>
    </header>
  )
}
