import React from 'react';
import './Card.css';

const Card = ({ cardTitle, cardImg }) => {
  return (
    <div className="port__card">
      <div className="port__card--container">
        <img src={cardImg} alt={cardTitle} className="port__card--image" />
        <div className="port__card--overlay">
          <h2 className="port__card--title">{cardTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
