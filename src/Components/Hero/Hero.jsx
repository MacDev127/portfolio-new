import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <h1 className="hero__title">Sean McMullan</h1>
        <h2 className="hero__subtitle">Frontend Developer</h2>

        <div className="hero__buttons">
          <a className="btn hero__button" id="hero__btn" href="#portfolio">
            View My Work
          </a>
          <a className="btn hero__button" id="hero__btn" href="#contact">
            Contact
          </a>
        </div>
        <div className="hero__socials">
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
