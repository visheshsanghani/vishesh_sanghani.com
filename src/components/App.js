import React from 'react';

import ManU from './ManU';
import UpClose from './UpClose';
import SkillSet from './SkillSet';
import PersuitOfHappyness from './PersuitOfHappyness';
import TimeLine from './TimeLine';
import LetsConnect from './LetsConnect';
import Footer from "./Footer";

import '../styles-sheet/app.css';
import '../styles-sheet/smallScreen.css';

function App() {
  return (
    <div>
      <ManU />
      <UpClose />
      <SkillSet />
      <PersuitOfHappyness />
      <TimeLine />
      <LetsConnect />
      <Footer />
    </div>
  );
}

export default App;
