import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Details" />
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Rules</h3>
                  <div>
                    <p>
                      San Diego CTF is a 48-hour jeopardy style CTF with static scoring. Challenges
                      vary across the disciplines of Open Source Intelligence, Cryptography, Web
                      Hacking, Reverse Engineering, Binary Exploitation, Jail Escapes, Forensic
                      Analysis, and others. At the end of a 48 hour period, the teams participating
                      are ranked by number of points, with ties broken by who reached that number of
                      points first.
                    </p>
                    <p className="mb-4">
                      Teams have no size limit. Monetary prizes are planned but not finalized. At
                      the conclusion of the competition, challenge and solution source code will be
                      made publicly available here.
                    </p>
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href="https://github.com/acmucsd/sdctf-2021"
                      >
                        See 2021 challenges
                      </a>
                    </span>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <ProjectImg alt="title" filename="geisel.png" />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Infrastructure</h3>
                  <div>
                    <p>
                      The competition is hosted entirely on the chat application Discord and
                      facilitated by a one-of-a-kind Discord bot. Everything from team management,
                      to challenge issuing to flag submission is handled by our bot. No web
                      interface necessary.
                    </p>
                    <p className="mb-4">
                      The Discord bot is called <strong>ctfbot</strong> and its open source.
                    </p>
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href="https://github.com/acmucsd/ctfbot"
                      >
                        See ctfbot source code
                      </a>
                    </span>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a href="#!" target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <ProjectImg alt="title" filename="discord.jpg" />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
