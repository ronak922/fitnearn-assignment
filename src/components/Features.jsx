import React from "react";
import blog from "../assets/features/blog.png";
import live from "../assets/features/live.png";
import content from "../assets/features/content.png";
import video from "../assets/features/video.png";
import "./Features.css";

const Features = () => {
  return (
    <div className="container">
      <div className="group-card">
        <div className="ion">
          {" "}
          <img src={blog} className="blogimg" />
        </div>
        <div className="cards" >
          <h3>Blog Writing</h3>
          <p style={{
    transform: 'translateY(67px)',
    fontFamily: 'Lato',
    fontSize: '17px',
    color: '#b0b0b0'
  }}> Coach can write blogs</p>
        </div>
      </div>

      <div className="group-card">
        <div className="ion">
          {" "}
          <img src={live} className="blogimg" />
        </div>
        <div className="cards">
        <h3>Live Sessions</h3>
        <p style={{
    transform: 'translateY(67px)',
    fontFamily: 'Lato',
    fontSize: '17px',
    color: '#b0b0b0'
  }}>
          Coach can create live <br />
          sessions
        </p>
        </div>
      </div>

      <div className="group-card">
        <div className="ion">
          {" "}
          <img src={content} className="blogimg" />
        </div>
        <div className="cards">
        <h3>Content Creation</h3>
        <p style={{
    transform: 'translateY(67px)',
    fontFamily: 'Lato',
    fontSize: '17px',
    color: '#b0b0b0'
  }}>Coach can create contents</p>
        </div>
      </div>

      <div className="group-card">
        <div className="ion">
          {" "}
          <img src={video} className="blogimg" />
        </div>
        <div className="cards">
        <h3>Workout Videos</h3>
        <p style={{
    transform: 'translateY(67px)',
    fontFamily: 'Lato',
    fontSize: '17px',
    color: '#b0b0b0'
  }}>
    Coach can create workout
    <br /> videos
</p>
  
        </div>
      </div><br/>
      <br/>



    </div>
  );
};

export default Features;
