import React from 'react'
import "./Home.scss"
import Slider from '../../Slider/Slider'
import Countup from '../../Countup/Countup'
import Category from '../../Category/Category'
import Video from '../../Video/Video'



const Home = () => {
  return (
    <div>
  <Slider/>
  <Category/>
  <Video/>
  
  <Countup/>
 

     
    </div>
  )
}

export default Home