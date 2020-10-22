import React, { useState } from 'react'
import './Word.css'
import HearingIcon from '@material-ui/icons/Hearing';
import wordData from './WordData';

function Word() {
    const [timer, setTimer] = useState(30)
    var newTime=timer;
    function handleClick(){
        setInterval(() => {
            if(newTime>0)
            {
                newTime=newTime-1
                setTimer(newTime)
            }else if(newTime===0)
            {
                setTimer("Time's Up!")
            }
        },1000)
    }
    return (
        <div className='word'>
            <div className='word__text'>
                <HearingIcon onClick={handleClick}/>
                <h1>{timer}</h1>
            </div>
            <p></p>
        </div>
    )
}

export default Word
