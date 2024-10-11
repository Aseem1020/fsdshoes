import React, { useContext, useEffect, useState } from 'react';
import './OrderDetails.scss';
import MyContext from '../../Context/MyContext';


const OrderDetails = () => {
  const { order, setOrder, token } = useContext(MyContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(!token){
      setLoading(false)
      return 
    }
    const fetchOrderItems = async () => {
      try {
        const response = await fetch('https://backendjs.vercel.app/get-order-info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

     
        const data = await response.json();
        setOrder(data.orderInfo);
        sessionStorage.setItem('order', JSON.stringify(data.orderInfo));
      } catch (error) {
        alert('Please try again');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderItems();
  }, [setOrder, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="order-container">
    {order &&  <div className="wavy-heading-container">
        <h1 className="wavy-heading">Order Details</h1>
      </div>}
      {order && order.length > 0 ? (
        <>
          {order
            .sort((a,b)=>b._id.localeCompare(a._id))
            .map((item) => (
            <div className="order-item" key={item._id}>
          
              <img src={item.img} alt={item.name} className="order-item-img" />
              <div className="order-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Order ID: {item._id.slice(-4)}</p>
                <p>Order Date: {item.orderDate.slice(0,10)}</p>
              </div>
            </div>
          ))}
        
        </>
      ) : (
        <p>No Order Data Available</p>
      )}
    </div>
  );
};

export default OrderDetails;