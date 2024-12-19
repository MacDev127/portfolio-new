import React from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Title children="Portfolio" />

      <div className="portfolio__wrapper">
        <a href="https://github.com/MacDev127/conflict-textiles-app">
          <Card
            cardTitle="Conflict Textiles"
            cardImg="../../../public/port1.jpg"
          />
        </a>
        <a href="https://github.com/MacDev127/Cactus_Jacks">
          <Card cardTitle="Cactus Jacks" cardImg="../../../public/port2.jpg" />
        </a>
        <a href="https://github.com/MacDev127/recipe-app">
          <Card cardTitle="Recipe App" cardImg="../../../public/port3.jpg" />
        </a>
        <Card
          cardTitle="Eagle Landscaping"
          cardImg="../../../public/port4.jpg"
        />
        <Card
          cardTitle="Sessiagh Cottage"
          cardImg="../../../public/port5.jpg"
        />
        <Card cardTitle="title" cardImg="https://via.placeholder.com/150" />
      </div>
    </div>
  );
};

export default Portfolio;
