import React from 'react';
import './App.css';
import Entry from './Entry';
import Header from './Header';
import LandingPage from './LandingPage';
import Lboard from './Lboard';
import Word from './Word';
import wordData from './WordData';

function App() {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      {/* <div className='app__center'>
          <div className='app__right'>
            <Word />
            <Entry word={wordData[0].word}/>
          </div>
          <div className='app__left'>
            <Lboard />
          </div>
      </div> */}
      
      
    </div>
  );
}

export default App;
