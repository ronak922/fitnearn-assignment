import React from 'react'
import "./Today.css"
import iphone1 from "../assets/today/iphone1.png"
import iphone2 from "../assets/today/iphone2.png"
import app from "../assets/today/app.png"

const Today = () => {
  return (
    <div>
         <h1 className="h1" style={{ marginTop: '-50px' }}>
  <br /> Become <span className="span">Coach</span> Today
</h1>

    <div className="container" style={{ flexDirection: 'column' }}>
      <div className="phones">
        <div className="phone">
          <div className="image-placeholder">
            <img src={iphone2} className='iphone1' />
          </div>
        </div>
        <div className="phone">
          <div className="image-placeholder">
          <img src={iphone1} className='iphone2' />
          </div>
        </div>
      </div>
      <div className="store-buttons">
      <a href="#">
       <img src={app} alt="" />
       </a>
      </div>
    </div>
    </div>
  )
}

export default Today
