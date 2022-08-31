import React from 'react';
import logo from '../../logo.svg';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer section__padding" id="contact">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="gpt3_logo" />
          <p>Margonda Residence, Depok, Indonesia. <br /> All Rights Reserved </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p><a href="https://www.linkedin.com/in/fal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://leetcode.com/falizhar" target="_blank" rel="noopener noreferrer">LeetCode</a></p>
          <p><a href="https://www.hackerrank.com/falizhar" target="_blank" rel="noopener noreferrer">HackerRank</a></p>
          <p><a href="https://github.com/falizhar" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <h5>Depok, Indonesia</h5>
          <p>
            <a
              href="https://api.whatsapp.com/send/?phone=6287773744040&text=Hi%20Falah,%20I%20have%20visited%20your%20website.%20Let%27s%20connect%21&type=phone_number"
              target="_blank"
              rel="noopener noreferrer"
            > (+62) 877-7374-4040
            </a>
          </p>
          <p><a href="mailto:hi@falah.page" target="_blank" rel="noopener noreferrer">hi@falah.page</a></p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>@{year} Falah Sultan Alizhar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
