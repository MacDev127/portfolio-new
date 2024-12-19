import React from 'react';
import './Card.css';

const Card = ({ cardTitle, cardImg }) => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={cardImg} alt={cardTitle} className="card__image" />
        <div className="card__overlay">
          <h2 className="card__title">{cardTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
