import React from "react";
import logo from "../assets/Logo.png";
import iphone from "../assets/iPhone 13 Pro Max (1).png";
import ecircle from "../assets/ellipse.png";
import smile from "../assets/smile.png";

import circle from "../assets/Circle.png";
import circle2 from "../assets/Circle2.png";
import circle3 from "../assets/Circle3.png";
import circle4 from "../assets/Circle4.png";
import appstore from "../assets/app-store.png";
import playstore from "../assets/google-play.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="fitnearnpal-container">
      {/* Header Section */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="FitnEarnPal Logo" />
        </div>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
        <button className="signup-btn">Sign Up Form</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="text-section">
          <h1 className="heading">
            <img className="smile" src={smile} alt="smile" />
            Hey, Awesome Coach
          </h1>
          <p>
            Expand Your Reach, Inspire More <br /> Lives
            <span className="highlight"> Join FitnEarnPal Today!</span>
          </p>
          <p>
            A global platform for coaches to connect, inspire, and <br /> change
            lives.
          </p>
          <div className="cta-buttons">
  <a href="#">
    <img src={appstore} className="download-appstore" alt="Download on the App Store" />
  </a>
  <a href="#">
    <img src={playstore} className="download-appstore" alt="Get it on Google Play" />
  </a>
</div>

        </div>
        {/* Background Circles */}
        <img className="circle1" src={circle} alt="circle1" />
        <img className="circle2" src={circle2} alt="circle2" />
        <img className="circle3" src={circle3} alt="circle3" />
        <img className="circle4" src={circle4} alt="circle4" />
        {/* Circle Container */}
        <div className="circle-container">
          <img className="eclipse2" src={ecircle} alt="eclipse" />
          <img className="eclipse" src={ecircle} alt="eclipse2" />
          <img className="phone-image" src={iphone} alt="iPhone" />
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <h2>Join the Growing Community of Coaches</h2>
        <p>
          FitnEarnPal is your gateway to connect with a global community of{" "}
          <br />
          health and fitness enthusiasts, share experiences and valuable <br />
          knowledge, and grow your audience. As a coach, you have the power to{" "}
          <br />
          inspire, educate, and motivate users worldwide by creating impactful{" "}
          <br />
          content, workout videos, live sessions, and more.
        </p>
        <button className="join-now-btn">Join Now</button>
      </section>
    </div>
  );
};

export default LandingPage;
