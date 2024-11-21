import React from 'react';
import './Works.css';
import verify from '../assets/work/verify.png';
import register from '../assets/work/register.png';
import createContent from '../assets/work/create-content.png';
import engage from '../assets/work/engage.png';

const Works = () => {
  return (
    <div className="how-it-works">
 <h1 className="h1" style={{ transform: 'translateX(14px) translateY(-59px)' }}>
  How It Works ?
</h1>

      
      <div className="steps">
        
        {/* Step 1: Register */}
        <div className="step">
        
          <div className="icon" style={{ backgroundImage: `url(${register})` }}>
          <hr className="hr" />
  
</div>

          <h2>Register</h2>
          <p>
            Support for multiple <br/>languages, making health <br/>monitoring accessible
            and<br/> easy for users around<br/> the globe.
          </p>
        </div>

        {/* Step 2: Verify */}
        <div className="step">
          <div
            className="icon"
            style={{ backgroundImage: `url(${verify})` }}
          ><hr className="hr1" />  </div>
          <h2>Verify</h2>
          <p>
          Support for multiple <br/>languages, making health <br/>monitoring accessible
          and<br/> easy for users around<br/> the globe.
          </p>
        </div>

        {/* Step 3: Create Content */}
        <div className="step">
          <div
            className="icon"
            style={{ backgroundImage: `url(${createContent})` }}
          ><hr className="hr2" /> </div>
          <h2>Create Content</h2>
          <p>
          Support for multiple <br/>languages, making health <br/>monitoring accessible
          and<br/> easy for users around<br/> the globe.
          </p>
        </div>

        {/* Step 4: Engage With Users */}
        <div className="step">
          <div
            className="icon"
            style={{ backgroundImage: `url(${engage})` }}
          ></div>
          <h2>Engage With Users</h2>
          <p>
          Support for multiple <br/>languages, making health <br/>monitoring accessible
          and<br/> easy for users around<br/> the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
