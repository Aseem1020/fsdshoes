import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';
import './Reset.scss';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Context/MyContext';


const validationSchema = yup.object({
 
  email: yup.string('Enter your Email').email('Enter a valid email').required('Email is required'),
  name: yup.string('Your Name').required('Name is required'),
 
});

const Reset = () => {
  const { loader, setLoader, setAlert, setMessage } = useContext(MyContext);
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);
      try {
        const response = await fetch('https://backendjs.vercel.app/reset', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setMessage(data.message);
          setAlert(true);
          resetForm();
          Navigate('/')
        } else {
          setMessage(data.error);
          setAlert(true);
        }
      } catch (error) {
        console.error('Error changing password:', error);
        setMessage('Error changing password.');
        setAlert(true);
      } finally {
        setLoader(false);
      }
    },
  });

  return (
    <div className='forgot-main'>
       <div className="wavy-heading-container">
        <h1 className="wavy-heading">Reset Password</h1>
      </div>
      <form className='form' onSubmit={formik.handleSubmit}>
      <Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField 
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name} 
        label="Your Name" 
        variant="outlined"
        />
</Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            label="Your Email Id"
            variant="outlined"
          />
        </Box>

       
        <Button variant="contained" type='submit'>
          <span>{loader ? 'Wait...' : 'Submit'}</span>
        </Button>
      </form>
    </div>
  );
};

export default Reset;