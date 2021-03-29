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
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col md={8} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              <span className="hero-subtitle">
                <span className="text-color-main"> ACM Cyber</span> at UCSD presents
              </span>
              <br />
              San Diego CTF
              <br />
              <span className="hero-details"><b>Fri</b> May 7, 5pm - <b>Sun</b> May 9, 5pm (PDT)</span>
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  Register Now
                </Link>
              </span>
            </p>
          </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <HeroImg alt="logo" filename="sdctf-logo.png" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
