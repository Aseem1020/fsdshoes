import React, { useContext } from 'react'
import "./Cart.scss"
import { SlMinus } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import { Button } from '@mui/material';


const Cart = () => {

  const {cart,handledelete,setIsOpen2,handleIncreaseQuantity,handleDecreaseQuantity} = useContext(MyContext)
  const Navigate = useNavigate()

  const total= cart&& cart.reduce((a,b)=>a+(b.price*b.quantity),0)
  
 
  return (
    <div className='cart-main'>
    <h2>Shopping Cart</h2>
    {cart && cart.length > 0 ? (
      <>
        {cart.map(item => (
          <>
          <div className="cart-item" key={item.productid}>
            <img src={item.img} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <span>&#8377; {item.price} </span> &nbsp;
              <div className="number">
              <button className='full'>
              <button onClick={() => handleDecreaseQuantity(item.categoryid,item.productid)}><SlMinus fontSize={20} /></button>
              <span className="count">{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.categoryid,item.productid)}><SlPlus fontSize={20}/></button>
              </button>
              </div>
              <span className="close" onClick={() => handledelete(item.categoryid, item.productid)}>&#10006;</span>
            </div>
          </div>
         </>
        ))}
          
        <div className="cart-total">
          <div className="value">
            <h4>Total Value :-</h4>
            <p><i>&#8377; {total}</i></p>
          </div>
          <div className="check">
    <Button variant="contained" type='submit'  onClick={() => { Navigate('/checkout') || setIsOpen2(false); }}><span>Checkout</span></Button>
    </div>
        </div>
        
      </>
      
    ) : (
      <p>No Item Available</p>
    )}
    
  </div>
  )

}

export default Cart