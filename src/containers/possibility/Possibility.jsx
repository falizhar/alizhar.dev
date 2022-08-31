import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Have a talk with me to get started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond our imagination</h1>
      <p>&quot;For millions of years, mankind lived just like the animals. Then something happened which unleashed the power
        of our imagination. We learned to talk and we learned to listen. Speech has allowed the communication of ideas,
        enabling human beings to work together to build the impossible. Mankind&apos;s greatest achievements have come
        about by talking, and its greatest failures by not talking.&quot;
        <h4>-- Stephen Hawking</h4>
      </p>
    </div>
  </div>
);

export default Possibility;
