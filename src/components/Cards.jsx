import React from "react";
import fitnessImg from "../assets/cards/gym.png"; // Corrected path
import meditationImg from "../assets/cards/meditation.png"; // Corrected path
import yogaImg from "../assets/cards/yoga.png"; // Corrected path
import physioImg from "../assets/cards/trainer.png"; // Corrected path
import rehabImg from "../assets/cards/rehab.png"; // Corrected path
import doctorImg from "../assets/cards/doctor.png"; // Corrected path
import "./Cards.css";

const Cards = () => {
  const cardData = [
    { title: "Fitness Trainer", image: fitnessImg },
    { title: "Meditation Trainer", image: meditationImg },
    { title: "Yoga Trainer", image: yogaImg },
    { title: "Physiotherapy Trainer", image: physioImg },
    { title: "Rehab & Recovery Experts", image: rehabImg },
    { title: "Doctors", image: doctorImg },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className={`card ${card.title === "Fitness Trainer" ? "fitness-card" : ""}`}>
          <img src={card.image} alt={card.title} className="card-image" />
          {/* <div className="card-title">{card.title}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Cards;