import React, { useContext } from 'react'
import "./ShopAll.scss"

import { useNavigate } from 'react-router-dom'
import MyContext from '../Context/MyContext'

const ShopAll = () => {
    const Navigate = useNavigate()
    const {num, setIsOpen5} = useContext(MyContext)
  
  return (
<>
        {num.map( Data => (
         <div className='shop-category'>
          <div className="shop-wrap">
         <div className="image-wrapper" key={Data.id} onClick={() => Navigate (`/category/${Data.category_url}`) || setIsOpen5(false) }>
         <img
            src={Data.category_img}
            alt={Data.name}
          />
         
          </div> 
        <div className="category-info">
          <h2>{Data.name}</h2>
        </div>
        </div>
        </div>      
      ))}
 
    </>
  )
}

export default ShopAll