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
          <Card cardTitle="Conflict Textiles" cardImg="/port1.jpg" />
        </a>
        <a href="https://github.com/MacDev127/Cactus_Jacks">
          <Card cardTitle="Cactus Jacks" cardImg="/port2.jpg" />
        </a>
        <a href="https://github.com/MacDev127/recipe-app">
          <Card cardTitle="Recipe App" cardImg="/port3.jpg" />
        </a>
        <a href="https://github.com/MacDev127/eagle-landscaping">
          <Card cardTitle="Eagle Landscaping" cardImg="/port4.jpg" />
        </a>
        <a href="https://github.com/MacDev127/home-shop">
          <Card cardTitle="Home Shop" cardImg="/port5.jpg" />
        </a>
        <a href="https://github.com/MacDev127/dashboard">
          <Card cardTitle="Dashboard" cardImg="/port6.png" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
