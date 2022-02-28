import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Sponsorship" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              We are actively looking for sponsors! If you are interested, check out our
              <a target="_blank" rel="noopener noreferrer" href="https://acmurl.com/cybersponsor">
                {' official sponsorship packet '}
              </a>
              and then get in touch with us below.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="mailto:cyber@acmucsd.org"
            >
              Let&#39;s Talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
