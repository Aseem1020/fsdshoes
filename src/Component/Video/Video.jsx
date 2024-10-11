import React from 'react'
import ReactPlayer from 'react-player'
import vid from "../../Assets/Slider/Untitled-2.mp4"
const Video = () => {
  return (
    <div className='video'>
<ReactPlayer
  playing
  loop
  autoplay
  url={vid}
  width= "100%"
  height="100%"
/>

          
    </div>
  )
}

export default Video