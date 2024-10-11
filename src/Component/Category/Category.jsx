import React, { useContext } from 'react';
import './Category.scss';
import { useNavigate } from 'react-router-dom';

import MyContext from '../Context/MyContext';


const Category = () => {
  const Navigate = useNavigate()
  const {num,setIsOpen} = useContext(MyContext)

  return (
    <>
    <div className="title1">
     <h1>Shop By Category</h1></div><br/>
    <div className="category-section">
      {num.map( Data => (
        <div key={Data.id} className="category" onClick={() => Navigate (`/category/${Data.category_url}`) || setIsOpen(false)}>
         <div className="container">
         <img
            src={Data.category_img}
            alt={Data.name}
            className="image"
          />

         <div className="overlay">
          <h2>{Data.name}</h2>
        </div>
          </div> 
       
        </div>
          
      ))}
    </div>
    </>
  );
};

export default Category;