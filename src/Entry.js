import React, { useState } from 'react'
import './Entry.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Entry(props) {
    const [entry, setEntry] = useState('');
    function handleChange(event){
        setEntry(event.target.value)
    }
    function submissionCheck(){
        if(entry.toUpperCase()===props.word.toUpperCase())
        {
            console.log("sucess");

        }else{
            console.log('NO No No')
        }
    }
    function submissionCheck_(event){
        if(event.key === 'Enter'){
                    if(entry.toUpperCase()===props.word.toUpperCase())
                {
                    console.log("sucess");
                    
                }else{
                    console.log('NO No No')
                }
        }
        
    }
    
    return (
        <div className='entry'>
            <input type='text' placeholder='Type the word' onChange={handleChange}></input>
            <div className='entry__button'>
            <button onKeyDown={submissionCheck_} onClick={submissionCheck}>Submit</button>
            <button>Next Word</button>
            </div>
            
            <CheckCircleIcon />
        </div>
    )
}

export default Entry
