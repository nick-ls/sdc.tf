import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  return (
    <section id="hero" className="jumbotron-fluid">
      <Container>
        <Fade bottom duration={1000} distance="30px">
          <h1 className="hero-title">
            <span className="hero-details">
              <b>
                <span style={{ color: '#F19A3E' }}>ACM Cyber</span> at UCSD presents
              </b>
            </span>
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <div className="hero-wrapper__image">
            <HeroImg alt="logo" filename="sdctf-logo2.png" />
          </div>
        </Fade>
        <br />
        <Fade bottom duration={1000} delay={2000} distance="30px">
          <h1 className="hero-title">
            <span className="hero-details">
              <b>Friday</b> May 7, 5pm - <b>Sunday</b> May 9, 5pm (PDT)
            </span>
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={2000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <a href="https://acmurl.com/sdctfdiscord">Register Now</a>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
