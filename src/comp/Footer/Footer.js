import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/ankit-dot-sharma" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sharmaankit050499@gmail.com">Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Gym Training App. All rights reserved.</p>
        <p>Designed and developed by Ankit Sharma</p>
      </div>
    </footer>
  );
}

export default Footer;