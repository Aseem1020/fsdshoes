import React from 'react'

import "./Loader.scss"
import { ScalingSquaresSpinner } from 'react-epic-spinners'

const Loader = (props) => {
  return (
    <div className='loading'>
     <ScalingSquaresSpinner color='maroon' ></ScalingSquaresSpinner>
  <h1>{props.title}</h1>
<img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default Loader