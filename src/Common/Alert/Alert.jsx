import React, { useContext, useEffect } from 'react'
import "./Alert.scss"
import { IoAlertCircleOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import MyContext from '../../Component/Context/MyContext';


const Alert = () => {
    const {alert,setAlert,message} = useContext(MyContext)
    useEffect(()=>{
        if(alert){
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }
    },[alert,setAlert])

  return (
<>
    { alert &&
    <div className="alert" style={{backgroundColor: message.match('Thanks') && 'green'}}>
    <span>{message.match('Thanks')?<TiTick />:<IoAlertCircleOutline />}</span>
    {message}
  </div>
    }
    </>
  )
}

export default Alert