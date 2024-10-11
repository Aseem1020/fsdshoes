import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MyContext from './MyContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MyProvider = ({children}) => {
  const [num,setNum] = useState([])
  const[loader, setLoader] = useState(false)
  const [cinfo, setCinfo] = useState([]);
  const [register,setRegister] = useState([])
  const [orderadmin,setOrderadmin] = useState([])
  const {form,setForm} = useState(false)
  const[token,setToken] = useState('')
  const[input,setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  
useEffect(()=>{
axios.get('https://backendjs.vercel.app/api')
.then((res)=> setNum(res.data.data)
)
},[])

useEffect(()=>{
  axios.get('https://backendjs.vercel.app/contact-info')
  .then((res)=> setCinfo(res.data.data)
  )
  },[])

  useEffect(()=>{
    axios.get('https://backendjs.vercel.app/new-account-info')
    .then((res)=> setRegister(res.data.data)
    )
    },[])
  
    useEffect(()=>{
      axios.get('https://backendjs.vercel.app/order-info')
      .then((res)=> setOrderadmin(res.data.data)
      )
      },[])

// for alert start

const [alert,setAlert] = useState(false)

// for alert end


const[message,setMessage] = useState('')


const handlelogout = () =>{
  const confirm = window.confirm('are you sure want to logout?')
  if(confirm){
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('wishlist')
  sessionStorage.removeItem('cart')
  sessionStorage.removeItem('order')
  setCart([])
  setWish([])
  setToken('')
  setOrder([])

  window.location.href='/'
  }
}


const Navigate = useNavigate()
const Navigate1 = useNavigate()

const [cart, setCart] = useState(() => {
  const savedCart = sessionStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});



const [wish,setWish] = useState(()=>{
  const savedWish = sessionStorage.getItem('wishlist');
  return savedWish ? JSON.parse(savedWish) : [];
});

const [isOpen2, setIsOpen2] = React.useState(false)



// for login Modal Close end


const handleCart = async(categoryid,productid,img,price,name) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backendjs.vercel.app/add-to-cart', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid,img,price,name})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleIncreaseQuantity = async(categoryid,productid) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backendjs.vercel.app/increase-quantity', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}


const handleDecreaseQuantity = async(categoryid,productid) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backendjs.vercel.app/decrease-quantity', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}


const handleOrder = async() =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('Please Login First')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backendjs.vercel.app/save-order-info', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({orderDate:new Date()})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.getItem('order' , JSON.stringify(data.orderInfo));
    sessionStorage.getItem('cart' , JSON.stringify(data.cartInfo));
    sessionStorage.clear('cart' , JSON.stringify(data.cartInfo));
    sessionStorage.setItem('order' , JSON.stringify(data.orderInfo));
    setMessage(data.message)
    setOrder(data.orderInfo)
    setCart(data.cartInfo)
    window.location.href='/confirmation'
  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleWish = async(categoryid,productid,img,price,name) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate1('/user')  
    }, 3000);

  }

  const response = await fetch('https://backendjs.vercel.app/add-to-wish', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid,img,price,name})
  });

  const data = await response.json()

  if(data.success){

    sessionStorage.setItem('wishlist', JSON.stringify(data.wishInfo));
    setAlert(true)
    setMessage(data.message)
    setWish(data.wishInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}




const handledelete = async(categoryid,productid) =>{


  const response = await fetch('https://backendjs.vercel.app/remove-from-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}
const handleremove = async(categoryid,productid) =>{


  const response = await fetch('https://backendjs.vercel.app/remove-from-wish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    setMessage(data.message)
    setWish(data.wishInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}


//orderdetail
const [order, setOrder] = useState(() => {
  const savedorderdetail = sessionStorage.getItem('order');
  return savedorderdetail ? JSON.parse(savedorderdetail) : [];
});



const [isOpen5, setIsOpen5] = React.useState(false)


return (
<MyContext.Provider value={{isOpen5, setIsOpen5,handleDecreaseQuantity,handleIncreaseQuantity,orderadmin,setOrderadmin,isOpen,handleOrder, setIsOpen,isOpen2, setIsOpen2,handleremove,handleWish,wish,setWish,handledelete,cart,setCart,handleCart,input,setInput,form,setForm,handlelogout,message,token,setToken,setMessage,alert,setAlert,num,loader,setLoader,cinfo, setCinfo ,register,setRegister,order, setOrder ,}} >
{children}
</MyContext.Provider>
)
}


export default MyProvider