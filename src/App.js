import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import User from './Component/Pages/Home/User/User'
import ScrollToTop from "react-scroll-to-top";
import Header from './Component/Header/Header';
import Loader from './Component/Loader/Loader';
import img5 from "../src/Assets/Slider/cute-penguin.gif";
import About from './Component/Pages/About/About';
import ContactForm from './Component/Pages/Contact/ContactForm';
import NewAccount from './Component/Pages/Home/NewAccount/NewAccount';
import MyProvider from './Component/Context/MyProvider';
import PrivacyPolicy from './Component/Pages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Component/Pages/TermsCondition/TermsCondition';
import ReturnClaim from './Component/Pages/ReturnClaim/ReturnClaim';
import Cart from './Component/Pages/Cart/Cart';
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';
import SinglePro from './Component/SingleProduct/SinglePro';
import Wishlist from './Component/Pages/Home/Wishlist/Wishlist';
import NoPage from './Component/Pages/NoPage/NoPage';
import Soul from './Component/Pages/Soul/Soul';
import Alert from './Common/Alert/Alert';
import LoaderForm from './Common/LoaderForm/LoaderForm';
import OrderDetails from './Component/Pages/OrderDetails/OrderDetails';
import Profile from './Component/Pages/Profile/Profile';
import Checkout from './Component/Checkout/Checkout';
import PaymentForm from './Component/Checkout/PaymentForm/PaymentForm';
import ConfirmationPage from './Component/Checkout/ConfirmationPage/ConfirmationPage';
import GotoTop from './Common/GotoTop/GotoTop';
import ShopAll from './Component/ShopAll/ShopAll';
import Reset from './Component/Pages/Home/Reset/Reset';
import Footer from './Component/Footer/Footer';




const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, 1300);
},[]);
  return (
    isLoading ?
    <Loader title="Welcome to Island Of Shoes..." src={img5} />:
   
      <BrowserRouter>
      <MyProvider>
      <Alert/>
      <ScrollToTop
      smooth
      viewBox="0 0 24 24"
      color="maroon"
      height="40" 
      width="40"
    style={{backgroundColor:"#ffffff",borderRadius:"50%", right:'20px'}}
    svgPath="M10 8.414V16a1 1 0 0 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L10 8.414ZM11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-2a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"

      />
      <GotoTop/>
      <LoaderForm/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<PaymentForm/>}/>
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
        <Route path='/soul' element={<Soul/>}/>
        <Route path='/shop' element={<ShopAll/>}/>
        <Route path='/order' element={<OrderDetails/>}/>
        <Route path='/shop-by-category' element={<Category/>}/>
        <Route path='category/:products' element={<Product/>}/>
        <Route path='category/:product/:single' element={<SinglePro/>}/>
        <Route path='/new-account' element={<NewAccount/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-conditions' element={<TermsCondition/>}/>
        <Route path='/return-claim' element={<ReturnClaim/>}/>
        
        <Route path='/gototop' element={<GotoTop/>}/>
      </Routes>
      <Footer/>
      </MyProvider>
      </BrowserRouter>
     
      
   
  )
}

export default App