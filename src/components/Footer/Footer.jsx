import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/company/cyber-ucsd/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <i className="fa fa-linkedin fa-inverse" />
          </a>
          <a
            href="https://www.facebook.com/cyberucsd"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="facebook"
          >
            <i className="fa fa-facebook fa-inverse" />
          </a>
          <a
            href="https://twitter.com/cyberucsd"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="twitter"
          >
            <i className="fa fa-twitter fa-inverse" />
          </a>
        </div>
        <p className="footer__text">
          © {new Date().getFullYear()} - ACM Cyber, original theme by
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
