import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Nav />
      <section className="hero">
        <Hero />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="skills">
        <Skills />
      </section>
      <section className="portfolio">
        <Portfolio />
      </section>
      <section className="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
