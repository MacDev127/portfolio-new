import React from 'react';
import Title from '../Title/Title';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <Title children="About" />
      <p className="about__text">
        I’m a Frontend Developer with over three years of experience crafting
        responsive, user-centered applications to solve real-world problems. My
        passion for translating complex requirements into intuitive, efficient
        solutions fuels my work with TypeScript, JavaScript, and React. Working
        closely with UX teams, I focus on building tools that improve user
        engagement and streamline operations. Known for my creative
        problem-solving, I thrive in fast-paced, innovative environments that
        prioritize scalability and modern web standards. I’m excited to bring my
        skills and collaborative spirit to a team that values forward-thinking
        solutions and offers opportunities for continuous growth and impact.
      </p>
    </div>
  );
};

export default About;
