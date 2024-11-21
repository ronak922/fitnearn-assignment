import React, { useState, useEffect } from 'react';
import './Say.css';
import coach from "../assets/say/coach.png";
import coach1 from "../assets/say/coach1.png";
import coach2 from "../assets/say/coach2.png";
import coach3 from "../assets/say/coach3.png";  // Added 3rd image
import stars from "../assets/say/stars.png";

const Say = () => {
  // State to track active image and profile
  const [currentImage, setCurrentImage] = useState(0);

  // Array of profile objects with image, name, and title
  const profiles = [
    {
      image: coach1,
      name: 'Jessica',
      title: 'Cardio Trainer'
    },
    {
      image: coach2,
      name: 'Lilly',
      title: 'Yoga Trainer'
    },
    {
      image: coach3,
      name: 'Veronica',
      title: 'Fitness Trainer'
    }
  ];

  // Change the active profile every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profiles.length); // Toggle between the profiles
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle click on circle to set active profile
  const handleCircleClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div className="coach-container">
        <h1>
          What our <span className="highlight">Coach Say</span>
        </h1>
        <p className='paragraph'>
          FitnEarnPal empowers coaches to grow and reach a global <br />audience while
          providing valuable health and fitness insights to users.
        </p>

        <div className="coach-feedback">
          <div className="feedback-card">
            <p className="feedback-text">
              <img src={stars} className='stars' /><br />After joining FitnEarnPal, my <br />audience reach has increased,
              and I<br /> can work according to my time,<br /> which I liked the most.
            </p>
            <img src={coach} className='side' />
            <img src={coach} className='side2' />
            <img src={coach} className='side3' />
            <img src={coach} className='side4' />
            <img src={coach} className='side5' />
            <img src={coach} className='side6' />

            {/* Circle with rotating images */}
            <div className="circle-container-review">
              <img
                className={`profile-image ${currentImage === 0 ? 'active' : ''}`}
                src={profiles[0].image}
                alt="Profile 1"
              />
              <img
                className={`profile-image ${currentImage === 1 ? 'active' : ''}`}
                src={profiles[1].image}
                alt="Profile 2"
              />
              <img
                className={`profile-image ${currentImage === 2 ? 'active' : ''}`}
                src={profiles[2].image}
                alt="Profile 3"
              />
            </div>

            {/* Display coach name and title based on current active profile */}
            <h4 className='coach'>{profiles[currentImage].name}</h4>
            <span className='yoga'>{profiles[currentImage].title}</span>

            {/* Circles below the trainer name to indicate active profile */}
            <div className="indicator-circles">
              <div
                className={`circle0 ${currentImage === 0 ? 'active' : ''}`}
                onClick={() => handleCircleClick(0)} // Click to change to Profile 1
              ></div>
              <div
                className={`circle0 ${currentImage === 1 ? 'active' : ''}`}
                onClick={() => handleCircleClick(1)} // Click to change to Profile 2
              ></div>
              <div
                className={`circle0 ${currentImage === 2 ? 'active' : ''}`}
                onClick={() => handleCircleClick(2)} // Click to change to Profile 3
              ></div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Say;
