import React, { useContext, useState } from 'react';
import "./PaymentForm.scss";
import {Button} from '@mui/material';
import MyContext from '../../Context/MyContext';

const PaymentForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const {handleOrder} = useContext(MyContext);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setInput('');
    setMessage('');
  };

  const handleSubmit = () => {
    if (input === captcha) {
     handleOrder()
    } else {
      setMessage('Captcha did not match. Please try again.');
    }
  };

  return (
    <div className='payment-form' style={{ textAlign: 'center', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
      <div className="wavy-heading-container">
        <h1 className="wavy-heading">Payment</h1>
      </div>
      <div  className='captcha-display' style={{ marginBottom: '10px', fontSize: '24px', padding: '10px', border: '1px solid #800026' , width:'fit-content' }}>
        {captcha}
        <Button variant="contained" type='submit' onClick={handleRefresh}><span>Refresh</span></Button>
      </div>
      <br />
      <div className="captcha-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter captcha"
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />
      <Button variant="contained" type='submit' onClick={handleSubmit}><span>Submit</span></Button>
      </div>
      
      <br />
      
      <div className='message' style={{ marginTop: '10px', color: message === 'Captcha matched!' ? 'green' : 'red'}}>
        {message}
      </div>
    </div>
  );
};

export default PaymentForm;