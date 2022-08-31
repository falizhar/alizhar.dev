import React from 'react';
import { TypedHooks } from '../../components/hooks/typedHooks';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Falah Sultan Alizhar</h1>
      <h2 className="gradient__text">
        <TypedHooks
          strings={[
            'Fullstack Developer',
            'Self-taught Learner',
            'Problem Solver',
          ]}
          loop
        />
      </h2>
      <div className="header-content__input">
        <a
          href="https://drive.google.com/file/d/1bTy_XU_CQpKWNpMEE0tIOfa_DoQAk0k3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">
            Download Resume
          </button>
        </a>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
