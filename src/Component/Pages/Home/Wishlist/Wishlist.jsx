import React, { useContext } from 'react'
import "./Wishlist.scss"
import { Button } from '@mui/material'
import MyContext from '../../../Context/MyContext'

const Wishlist = () => {
  const {wish,handleremove } = useContext(MyContext)
  return (
    
    <>
   <h1>My WishList</h1>
   { wish && wish.length>0?(wish.map((item) =>{
    return(
    <div className="wishlist-item">
    <img src={item.img} alt='' className="wishlist-item__image" />
    <div className="wishlist-item__details">
      <h3 className="wishlist-item__name">{item.name}</h3>
      <p className="wishlist-item__price">&#8377;{item.price} &nbsp; <del>&#8377;{item.del}</del></p>
      <Button variant="contained" type='submit' onClick={()=>handleremove(item.categoryid,item.productid)}><span>Remove</span></Button>
    </div>
    </div>
  )
    })
  
    ):
    <p>no item available</p>
  }

    </>
  
  
  )
}

export default Wishlist