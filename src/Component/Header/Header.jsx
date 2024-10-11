import React, { useContext } from 'react'
import "./Header.scss"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Logo/logo.png"
import { CgMenu } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { TbUserSquareRounded } from "react-icons/tb";
import { RiHeart2Line } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Wishlist from '../Pages/Home/Wishlist/Wishlist';
import Cart from '../Pages/Cart/Cart';
import ShopAll from '../ShopAll/ShopAll';
import img2 from "../../Assets/magnifying-glass.png"
import MyContext from '../Context/MyContext';
import { TbUserCheck } from "react-icons/tb";
import { Button } from '@mui/material';
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SlPhone } from "react-icons/sl";
import { BiHandicap } from "react-icons/bi";


const Header = () => {
  
  
 const Token = sessionStorage.getItem('token')
 const Navigate = useNavigate()
 const Navigate1 = useNavigate()
 const Navigate2 = useNavigate()
 

 const toggleDropdown = () => {
     setIsOpen(!isOpen);
 };
 const {handlelogout,input,setInput,num,cart,wish,isOpen2, setIsOpen2,isOpen, setIsOpen,isOpen5, setIsOpen5} = useContext(MyContext)

    const [isOpen1, setIsOpen1] = React.useState(false)
    const toggleDrawer1 = () => {
        setIsOpen1((prevState) => !prevState)
        
    }

  
    const toggleDrawer2 = () => {
        setIsOpen2((prevState) => !prevState)
    }

    const [isOpen3, setIsOpen3] = React.useState(false)
    const toggleDrawer3 = () => {
        setIsOpen3((prevState) => !prevState)
    }



    const toggleDrawer5 = () => {
        setIsOpen5((prevState) => !prevState)
    }

   
    const[menu,setMenu]= React.useState(false)
    const toggleDrawer4 = () => {
      setMenu((prevState) => !prevState)
    }

 
 
  
  


   
  return (
    <>
    <div className='header-main'>

      

      
    <div className='left'>
   <ul>
   <div className="shop-all" >
        <li onClick={toggleDrawer5} >Shop</li>
      </div>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
       <Link to="/soul"><li>Souls</li></Link> 
       </ul>
      </div>

      <div className="center">
      <Link to="/"><img src={logo} alt=''/></Link>
    
      
      </div>

      <div className="right">

      <span className='menubar' onClick={()=>setMenu(true)}> <CgMenu
      color='#034070' /></span>

        <BiSearchAlt onClick={toggleDrawer1}/>
      {!Token ? <Link to="/user"><TbUserSquareRounded  /></Link> :
       <div className="dropdown">
       <TbUserCheck onClick={toggleDropdown} className="dropbtn" />
       <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
           <Button onClick={handlelogout}>Logout</Button>
           <Button onClick={() => Navigate('/order') || setIsOpen(false)} >Order Details</Button>
           <Button onClick={() => Navigate1('/profile')|| setIsOpen(false)}>Your Profile</Button>
           <Button onClick={() => Navigate2('/checkout')|| setIsOpen(false)}>Shipping Details</Button>
       </div>
   </div>
      }
       <div className="wish-icon">
        <RiHeart2Line onClick={toggleDrawer3}/> 
        <p>{wish ? wish.length:0}</p>
        </div>
        <div className="cart-icon">
        <RiShoppingBag3Line  onClick={toggleDrawer2}/> 
        <p>{cart ? cart.length:0}</p>
        </div>
       </div>
    
    </div>


    <Drawer
    open={isOpen5}
    onClose={toggleDrawer5}
    direction='top' 
    zIndex={99999}
    className='shop-category'
    style={{overflow:'auto'}}
    
  >
    
    <ShopAll/>
    
  </Drawer>
    
    <Drawer
                open={isOpen1}
                onClose={toggleDrawer1}
                direction='top'
                style={{height:'100px'}}
              >
                <div className="search">
                <div class="search-container">
                
    <input type="text" id="search-bar" class="search-input" onChange={(e) => setInput(e.target.value)} value={input}  placeholder="Search..."/>
    <button id="search-button" class="search-button"><img src={img2} alt=''/></button><br/>
    

    </div>
   
    <div>
   
   
</div>
                </div>
                {num
.filter((a)=>{
  const newdata = a.name.toLowerCase()
  const netinput =input.toLowerCase() 
  return(
netinput && newdata.startsWith(netinput)
  )
}).map((a)=>{
  return(
    <div className="list">
<li onClick={() => Navigate2(`/category/${a.category_url}`) || setInput('') || setIsOpen1(false)}  >{a.name}</li>
</div>
  )
})}
   
   
              </Drawer>
               

            <Drawer
                open={isOpen2}
                onClose={toggleDrawer2}
                direction='right'
                zIndex={9999}
                style={{overflow:'auto',padding:'10px'}}
            >
                
                  <Cart/>
               
            </Drawer>

            <Drawer
                open={isOpen3}
                onClose={toggleDrawer3}
                direction='bottom'
                zIndex={9999}
                style={{overflow:'auto'}}

            >
                <div className='wishto'>
                  <Wishlist/>
                </div>
            </Drawer>

                
    <Drawer
                open={menu}
                onClose={toggleDrawer4}
                direction='left'
                style={{backgroundColor:'lightcyan', fontFamily:'Mooli', color:'#034070', listStyle:'none', display:'flex', flexDirection:'column', gap:'30px',justifyContent:'center', alignItems:'center', cursor:'pointer'}}
                zIndex={99999}
                
              >
             
<li onClick={() => Navigate('/shop-by-category')|| setMenu(false)}><RiShoppingCartLine/> &nbsp; Shop </li>
<li onClick={() => Navigate('/about')|| setMenu(false)}><IoMdInformationCircleOutline />&nbsp; About</li>
<li onClick={() => Navigate('/contact')|| setMenu(false)}><SlPhone/> &nbsp; Contact</li>
<li onClick={() => Navigate('/soul')|| setMenu(false)}><BiHandicap />&nbsp; Souls</li>


              </Drawer>

    </>

  )
}

export default Header