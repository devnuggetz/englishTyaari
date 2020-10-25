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
            props.setTimer(0)
            

        }else{
            alert('NO No No')
            
        }
    }
    function submissionCheck_(event){
        if(event.keyCode === 13){
                    if(entry.toUpperCase()===props.word.toUpperCase())
                {
                    alert("sucess");
                    props.setTimer(0)
                    
                    
                }else{
                    alert('NO No No')
                    
                }
        }

    }
    const handleIndex=()=>{
        if(props.index===9){
            props.setIndex(0)
        }else{
            props.setIndex(props.index+1)
        }
        props.setTimer(5)
    }
    
    return (
        <div className='entry'>
            <input type='text' placeholder='Type the word' onChange={handleChange} onKeyDown={submissionCheck_}></input>
            <div className='entry__button'>
            <button onClick={submissionCheck}>Submit</button>
            <button onClick={handleIndex}>Next Word</button>
            </div>
            
            {/* <CheckCircleIcon /> */}
        </div>
    )
}

export default Entry
