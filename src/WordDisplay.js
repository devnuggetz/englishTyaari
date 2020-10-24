import React, { useEffect, useState } from 'react'
import wordData from './WordData'
import './WordDisplay.css'

function WordDisplay() {
    const index= Math.floor(Math.random()*9) 
    const word= wordData[index].word;
    const def= wordData[index].def;
    return (
        <div className='wordDisplay'>
            <p>"{word} : {def}"</p>
        </div>
    )
}

export default WordDisplay
