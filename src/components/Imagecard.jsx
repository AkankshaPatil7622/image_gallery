import React, { useState } from 'react'
import '../style/imagecardstyle.css';

function Imagecard({src, alt, onView}) {

  return (
   
   <>
    <div className="image-container">
      <img src={src} alt={alt} className="imagecard" />
      <button className="view-btn" onClick={onView}>View</button>
    </div>

    
   </>
  
  )
}

export default Imagecard