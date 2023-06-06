import React from 'react';
import './Vedios.scss'

import {AiFillEye} from 'react-icons/ai'

const Vedios = () => {
  return (
    <div className="vedios">
      <div className="vedio_top">
        <img src='Images/top_image.jpg' className='img-fluid' alt='Top Images'/>
        <span className='time'>5:48</span>
      </div>
      <div className="vedio_title">
        Exclusive Clip | Loki Exclusive Clip | Loki
      </div>
      <div className="vedio_details">
       <span><AiFillEye /></span> <span>55 views</span> . 2 Days ago
      </div>
      <div className="vedio_channel">
        <img src='Images/top_image.jpg' className='img-fluid' alt='chanel_img'/>
        <p>Marvel Entertainmeny</p>
      </div>
    </div>
  )
}

export default Vedios
