import React from 'react';
import './Skills.css';
import Title from '../Title/Title';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Title children="Skills" />

      <div className="skills__container">
        <div className="skill__details">
          <p className="skill__name">ReactJS</p>
          <i class="bx bxl-react" style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">Typescript</p>
          <i class="bx bxl-typescript " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">JavaScript</p>
          <i class="bx bxl-javascript " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">Tailwind</p>
          <i class="bx bxl-tailwind-css " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">CSS</p>
          <i class="bx bxl-css3 " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">HTML</p>
          <i class="bx bxl-html5 " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">Wordpress</p>
          <i class="bx bxl-wordpress " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">PHP</p>
          <i class="bx bxl-php " style={{ fontSize: '52px' }}></i>
        </div>
        <div className="skill__details">
          <p className="skill__name">Github</p>
          <i class="bx bxl-github" style={{ fontSize: '52px' }}></i>{' '}
        </div>
        <div className="skill__details">
          <p className="skill__name">NodeJs</p>
          <i class="bx bxl-nodejs" style={{ fontSize: '52px' }}></i>{' '}
        </div>
      </div>
    </div>
  );
};

export default Skills;
