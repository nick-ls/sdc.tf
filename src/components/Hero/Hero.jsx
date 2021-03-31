import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron-fluid">
      <Container>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="hero-wrapper__image">
            <HeroImg alt="logo" filename="sdctf-logo.png" />
          </div>
        </Fade>
        <br />
        <Fade bottom duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="hero-details"><b>Fri</b> May 7, 5pm - <b>Sun</b> May 9, 5pm (PDT)</span>
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  Register Now
                </Link>
              </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
