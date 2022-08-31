import React from 'react';

import { Footer, Possibility, WorkExperience, AboutMe, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <AboutMe />
    <WorkExperience />
    <Possibility />
    <CTA />
    <Footer />
  </div>
);

export default App;
