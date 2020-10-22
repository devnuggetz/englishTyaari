import React from 'react';
import './App.css';
import Entry from './Entry';
import Header from './Header';
import Lboard from './Lboard';
import Word from './Word';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__center'>
          <div className='app__right'>
            <Word />
            <Entry />
          </div>
          <div className='app__left'>
            <Lboard />
          </div>
      </div>
      
      
    </div>
  );
}

export default App;
