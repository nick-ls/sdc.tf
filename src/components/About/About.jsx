import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
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
    <section id="about">
      <Container>
        <Title title="About Us" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="profile.png" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  San Diego CTF, also known as SDCTF, is an annual Capture the Flag competition
                  hosted by undergraduates at the University of California, San Diego (UCSD). The
                  competition will be jeopardy-style and run in the 48 hour period from April 16 to
                  April 18, 2021. We encourage participation from teams on and off campus, of all
                  ages and backgrounds.
                </p>
                <p className="about-wrapper__info-text">
                  This event is hosted yearly by ACM Cyber, the chief cybersecurity organization on
                  campus at UC San Diego. This yearly competition allows us to train our members,
                  build our internal resources, and give back to the greater cybersecurity
                  community.
                </p>
                <p className="about-wrapper__info-text">
                  While our infrastructure is in development, registration is not available at this
                  time. You can indicate you want to contacted with information once it is available
                  using the form linked below.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://forms.gle/UnmomPBQfN8MTnjw9"
                  >
                    Register
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
