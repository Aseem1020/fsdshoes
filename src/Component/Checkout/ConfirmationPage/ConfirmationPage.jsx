import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.scss';
import { Button } from '@mui/material';

const ConfirmationPage = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleViewOrderDetails = () => {
    navigate('/order');
  };

  return (
    <div className={`confirmation-page ${animate ? 'animate' : ''}`}>
      <div className="tick-mark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={50} height={50} ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" fill="#34ad00"/></svg>
      </div>
      <h1>Order Confirmed!</h1>
      <p>Your order has been placed successfully.</p>
      <Button onClick={handleViewOrderDetails}><span>View Order Details</span></Button>
    </div>
  );
};

export default ConfirmationPage;
