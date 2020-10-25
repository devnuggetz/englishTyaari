import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Entry from './Entry';
import Header from './Header';
import LandingPage from './LandingPage';
import Lboard from './Lboard';
import Word from './Word';
import wordData from './WordData';
import {TimerContext, TimerProvider} from './TimerContext'

function App() {
  const user=  null;
  const [index, setIndex] = useState(0)
  const [timer, setTimer] = useState(5)
  return (
    <div className="app">
      <Header />
      {
        !user?(<LandingPage />):(
          <div className='app__center'>
          <div className='app__right'>
              
              <Word 
               word={wordData[index].word}
               def={wordData[index].def}
               audio={wordData[index].audio} 
               timer={timer}
               setTimer={setTimer}
               
               />
               
               <Entry 
                word={wordData[index].word} 
                setIndex={setIndex} 
                index={index}
                setTimer={setTimer}
                />
               
            
          </div>
          <div className='app__left'>
                <Lboard />
              
          </div>
      </div>
        )
      }
      
    </div>
  );
}

export default App;

