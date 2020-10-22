import React from 'react'

function CorrectWord(props) {
    return (
        <div className='correctWord'>
            <h1>Correct word is: {props.word}</h1>
        </div>
    )
}

export default CorrectWord
