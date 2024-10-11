import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';

import './Checkout.scss';
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context/MyContext';

const validationSchema = yup.object({
  name: yup.string('Enter your full name').required('Name is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  number: yup.string('Enter your number').min(10, 'Mobile No. should be of minimum 10 characters length').required('Mobile No. is required'),
  address: yup.string('Enter your address').required('Address is required'),
  city: yup.string('Enter your city').required('City is required'),
  state: yup.string('Enter your state').required('State is required'),
  landmark: yup.string('Enter your landmark').required('Landmark is required'),
  pincode: yup.string('Enter your pincode').required('Pincode is required'),
});

const Checkout = () => {
  const { loader, setLoader, setAlert, setMessage } = useContext(MyContext);
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      address: '',
      city: '',
      state: '',
      landmark: '',
      pincode: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);
      try {
        const response = await fetch('https://backendjs.vercel.app/save-shipping-info', {
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
          Navigate('/payment')
        } else {
          setMessage(data.error);
          setAlert(true);
        }
      } catch (error) {
        console.error('Error saving shipping information:', error);
        setMessage('Error saving shipping information.');
        setAlert(true);
      } finally {
        setLoader(false);
      }
    },
  });

  return (
    <div className='checkout-main'>
      <div className="wavy-heading-container">
        <h1 className="wavy-heading">Checkout</h1>
      </div>
      <form className='form' onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            label="Your Mobile No."
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

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            label="Address"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            label="City"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="state"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            label="State"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PinDropIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="pincode"
            name="pincode"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
            helperText={formik.touched.pincode && formik.errors.pincode}
            label="Pincode"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="landmark"
            name="landmark"
            value={formik.values.landmark}
            onChange={formik.handleChange}
            error={formik.touched.landmark && Boolean(formik.errors.landmark)}
            helperText={formik.touched.landmark && formik.errors.landmark}
            label="Landmark"
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

export default Checkout;