import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'
import './Cart.css'

const Cart = (props) => {
  const navigate = useNavigate()
  const {myCart, addToCart, total, setTotal} = useContext(CartContext)

  const handleCheckout = () => {
    setTotal(0)
    addToCart([{}])
  }

  const handleGoHome = () => {
    navigate('/')
  }
  
  return (
    <div>
      <section className='cart-container'>
        <div className="cart-header">CHECK OUT:</div>
        <div className="cart-items">
          {myCart.slice(1).map((item, index)=>{
            return (
              <div className='cart-item' key={index}>
                <img className='cart-item-img' src={item.imageUrl} alt={item.name} />
                {item.name} : ${item.price}
              </div>
            )
          })}
          <div className='cart-total'>Total: ${total}</div>
          <button className='cart-checkout' onClick={handleCheckout}>Done</button> <br />
          <button className='cart-gohome' onClick={handleGoHome}>Go back Home page</button>
        </div>
      </section>
    </div>
  )
}

export default Cart