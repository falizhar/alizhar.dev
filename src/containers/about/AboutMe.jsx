import React from 'react';
import { Information } from '../../components/index';
import './aboutMe.css';

const AboutMe = () => (
  <div className="personal-cv__about section__margin" id="about">
    <div className="alizhardev-feature">
      <Information title="About Me" />
    </div>
    <div className="alizhardev-heading">
      <h1 className="gradient__text"> &gt;  Listen to my career-switch journey on the podcast: &nbsp;
        <a
          href="https://hubbedin.com/podcast/-from-tech-recruitment-to-software-engineering-why-not"
          target="_blank"
          rel="noopener noreferrer"
        >here
        </a>
        .
      </h1>

      <div className="alizhardev-heading-col">
        <p className="regular__text">Falah switched careers from technical recruitment to full-stack development,
          self-educating himself utilizing all openly available resources such as official documentation, freeCodeCamp,
          LeetCode, Stack Overflow, and so on.
        </p>
        <br />
        <p className="regular__text"> He has about one year of experience as a junior full-stack developer, mostly using
          TypeScript/JavaScript (ES6+) as main programming languages, is familiar with React.js and Nest.js, and is
          eager to learn new technologies.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
