import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./ContactForm.scss"
import { Box, Button, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';
import MyContext from '../../Context/MyContext';


const validationSchema = yup.object({
  name: yup
  .string('Enter your name')
  .required('Name is required'),
  message: yup
  .string('Enter your message')
  .required('Message is required'),
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
  number: yup
  .string('Enter your mobile number')
  .min(8, 'Number should be of minimum 10 characters length')
  .required('Mobile No. is required')
  
 
});


const ContactForm = () => {
  const{loader,setLoader,setAlert,setMessage} = useContext(MyContext)
  
  
  const formik = useFormik({
    initialValues: { 
    name: '',
    number: '',
    email: '',
    message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async(values,{resetForm}) => {

       setLoader(true)
        const response = await fetch('https://backendjs.vercel.app/contact', {
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
          resetForm() 
      
      
        }else{
          setMessage(data.error)
          setAlert(true)
        }
        setLoader(false)
      },
      
    });





   


  
  return (
    <div className='contact-main'>
<div className="wavy-heading-container">
        <h1 className="wavy-heading">Contact Us</h1>
      </div>
<p>Hours of Operation: <b>Monday - Saturday 9 AM - 5 PM IST</b></p>
<p>Toll-Free within India: +1800-867-5627</p>
<p>Mobile No. : 9754850400</p>
<p>Email Id : <Link>aseemjoshi75@gmail.com</Link></p>
<p>Type questions or feedback below and a Customer Service Specialist will reply within 24 business hours.</p>
<form className='form' onSubmit={formik.handleSubmit}>
<Box  sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField 
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name} 
        label="Your Name" 
        variant="outlined" />
</Box>


<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number} 
          label="Your Mobile No." 
          variant="outlined" />
</Box>

<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} 
          label="Your Email Id" 
          variant="outlined" />
</Box>

<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message} 
          label="Your Message"
          multiline
          rows={1} 
          variant="outlined" />
</Box>
<Button variant="contained" type='submit'><span>{loader ? 'wait...' : 'submit'}</span></Button>

</form>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0448738187147!2d76.5564531080852!3d22.57742493271323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d3182de4563c5%3A0xf22222eb327c3d67!2sDr.chouhan%20Clinic!5e0!3m2!1sen!2sin!4v1708665558368!5m2!1sen!2sin" width="98%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Solemates'></iframe>



</div>
  )
}



export default ContactForm