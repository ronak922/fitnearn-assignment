import React from "react";
import circle from "../assets/coach/circle.png"
import iphone from "../assets/coach/iPhone 13 Pro Max.png"
import global from "../assets/coach/Frame 436.png"
import revenge from "../assets/coach/revenge.png"
import work from "../assets/coach/work.png"
import personal from "../assets/coach/personal.png"
import "./Coach.css";

const Coach = () => {
  return (
    <div className="coach-container">
      <h2 className="coach-heading">
        What's in it for <span className="highlight">Coach</span>
      </h2>
      <p className="coach-description">
        FitnEarnPal empowers coaches to grow and reach a global<br/>     audience while valuable health and fitness insights to users.
      </p>
      
      <div className="coach-content">
        {/* Left Side Content */}
        <div className="coach-info left">
          <div className="info-item1">
          <img src={global} alt="" className="globalimg" />
            <h3 className="gl" >Global Audience Access</h3>
            <p>Helps you gain global audience</p>
          </div>
          <div className="info-item2">
          <img src={revenge} alt="" className="revenueimg" />
          <h3 style={{
    transform: 'translateY(92px)',
    fontFamily: 'Lato',
    fontSize: '18px',
    marginBottom: '10px'
  }}>
  Revenue Opportunities
</h3>

<p style={{
    transform: 'translateY(74px)',
    fontFamily: 'Lato',
    fontSize: '17px',
    color: '#b0b0b0'
  }}>
  Helps you gain global audience
</p>

          </div>
        </div>

        {/* Center Content - iPhone Placeholder */}
       <div className="iphone-container">
        <img className="circle"  src={circle}alt="Circle" />
        <img className="iphone" src={iphone} alt="Iphone-Image" />

       </div>
        {/* Right Side Content */}
        <div className="coach-info right">
          <div className="info-item3">
           <img src={personal} alt=""  className="personalimg"/>
           <h3 style={{
    transform: 'translateY(-62px) translateX(12px)',
    fontFamily: 'Lato', // corrected to camelCase
    fontSize: '18px',   // corrected to camelCase
    marginBottom: '10px' // corrected to camelCase
  }}>
  Personal Brand
</h3>


            <p className="perb">Helps you gain global audience</p>
          </div>
          <div className="info-item4">
           <img src={work} alt="" className="workimg" />
           <h3 style={{
    fontFamily: 'Lato',
    fontSize: '18px',
    marginBottom: '10px',
    transform: 'translateY(10px)'
  }}>
  Work on Your Own Schedule
</h3>


            <p>Helps you gain global audience</p>
          </div>
        </div>
      </div>
      <h1 className="key"> Key Features</h1>
    </div>
    
  );
};

export default Coach;
