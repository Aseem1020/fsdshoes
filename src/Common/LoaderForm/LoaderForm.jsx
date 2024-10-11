import React, { useContext }  from 'react'

import "./LoaderForm.scss"
import MyContext from '../../Component/Context/MyContext';
import { ScalingSquaresSpinner } from 'react-epic-spinners';




const LoaderForm  = () => {
  
   const{loader} = useContext(MyContext)

  return (
    <>
    {loader && 
    <div className='loading1'>
     <ScalingSquaresSpinner color="maroon"></ScalingSquaresSpinner>
    </div>
}
    </>
  )
}

export default LoaderForm