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
                      San Diego CTF is a 48-hour jeopardy style CTF with dynamic scoring. Challenges
                      start with a number of points (100-500) they are worth that steadily decreases
                      the more successful solves there are. At the end of a 48 hour period, the
                      teams participating are ranked by number of points, with ties broken by who
                      reached that number of points first.
                    </p>
                    <p className="mb-4">
                      Teams have no size limit. Monetary prizes are planned but not finalized. At
                      the conclusion of the competition, challenge and infrastructure source code
                      will be released to the public and posted here.
                    </p>
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
                      The competition will be hosted entirely on the chat application Discord and
                      facilitated by an advanced, in-house Discord bot. This makes San Diego CTF the
                      only CTF of its kind, and we hope the open source technology we create will
                      help facilitate more competitions of this kind around the world.
                    </p>
                    <p className="mb-4">
                      Source code is to be released after the conclusion of the competition.
                    </p>
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
