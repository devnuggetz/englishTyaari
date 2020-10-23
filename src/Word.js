import React, { useState } from 'react'
import './Word.css'
import HearingIcon from '@material-ui/icons/Hearing';
import wordData from './WordData';
import CorrectWord from './CorrectWord';

function Word() {
    const [timer, setTimer] = useState(5)
    var audioFile = new Audio(wordData[0].audio)
    var newTime=timer;
    function runTimer(){
        setInterval(() => {
            if(newTime>0)
            {
                newTime=newTime-1
                setTimer(newTime)
            }else if(newTime===0)
            {
                setTimer("Time's Up!");
            }
        },1000)
    }
    function handleClick(){
        runTimer();
        audioFile.play();
    }
    return (
        <div className='word'>
            <div className='word__text'>
                <div className='word__timer'>
                <HearingIcon onClick={handleClick}/>
                <h1>{timer}</h1>
                </div>
                <div className='word__display'>
                {timer==="Time's Up!"&&<CorrectWord word={wordData[0].word}/>}
                </div>
            </div>
                <p>{wordData[0].def}</p>
        </div>
    )
}

export default Word
