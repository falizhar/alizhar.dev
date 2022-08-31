import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="cta">
    <div className="cta-content">
      <p>I am a believer of butterfly effect. A small positive vibration can change the entire cosmos.</p>
      <h3>Contact me today & start the endless possibilities.</h3>
    </div>
    <div className="cta-btn">
      <a
        href="https://api.whatsapp.com/send/?phone=6287773744040&text=Hi%20Falah,%20I%20have%20visited%20your%20website.%20Let%27s%20connect%21&type=phone_number"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">WhatsApp</button>
      </a>
    </div>
  </div>
);

export default CTA;
