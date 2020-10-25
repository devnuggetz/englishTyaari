import React, { useContext, useState } from 'react'
import './Word.css'
import HearingIcon from '@material-ui/icons/Hearing';
import wordData from './WordData';
import CorrectWord from './CorrectWord';

function Word(props) {
    const index= Math.floor(Math.random()*9) 
    var audioFile = new Audio(props.audio)
    var newTime= props.timer
    function runTimer(){
        setInterval(() => {
                if(newTime>=0)
            {
                props.setTimer(newTime--)
            }else if(newTime<0)
            {
                clearInterval()
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
                <h1>{props.timer}</h1>
                </div>
                <div className='word__display'>
                {props.timer===0&&<CorrectWord word={props.word}/>}
                </div>
            </div>
                <p>{props.def}</p>
        </div>
    )
}

export default Word
