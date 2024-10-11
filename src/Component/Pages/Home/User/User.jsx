import React, { useContext } from 'react'
import "./User.scss";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Context/MyContext';



const validationSchema = yup.object({
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
  password: yup
  .string('Enter your password')
  .min(8, 'Password should be of minimum 8 characters length')
  .required('Password is required')
  

  });

const User = () => {
  const Navigate = useNavigate();
  const [showPassword] = React.useState(false);
  const{loader,setOrder,setLoader,setAlert,setMessage,setToken,setCart,setWish} = useContext(MyContext)
  const formik = useFormik({
    initialValues: {
    email: '',
    password: '',
    
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true)
      const response = await fetch('https://backendjs.vercel.app/user', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await response.json()

      if(data.success){
        setMessage(data.message)
        setAlert(true)
        setCart(data.cartInfo)
        sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
        sessionStorage.setItem('wishlist', JSON.stringify(data.wishInfo));
        sessionStorage.setItem('order', JSON.stringify(data.orderInfo));
        setWish(data.wishInfo)
        setOrder(data.orderInfo)
        sessionStorage.setItem('token',data.data)
        setToken(data.data)
        resetForm() 
        window.location.href='/'
        
    
      }else{
        setMessage(data.error)
        setAlert(true)
      }
      setLoader(false)
    },
  });

  return (
    <div className='user-main'>
      <div className="frame">
      <div className="div1">
      <div className="wavy-heading-container">
        <h1 className="wavy-heading">Sign In</h1>
      </div>
    
    <form className='form1' onSubmit={formik.handleSubmit}>
    
    <TextField 
    id="email"
    name="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email} 
    label="Email" 
    variant="standard" />
    
    <TextField variant="standard" 
    id="password"
    name="password"
    label="Password"
    value={formik.values.password}
    type={showPassword ? 'text' : 'password'}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}/>
         
    
    <Button variant="contained" type='submit'><span>{loader ? 'Wait...' : 'Sign In'}</span></Button>
    <p onClick={() => Navigate('/reset')}>Forgot Password ?</p>
    </form>
    </div>
    <hr/>
     
<div className="div2">
<div className="wavy-heading-container">
        <h1 className="wavy-heading">New To Us?</h1>
      </div>
    <Button variant="contained" type='submit' onClick={() => Navigate('/new-account')}><span>Sign Up</span></Button>
    </div>
    </div>
    </div>
  )
}

export default User