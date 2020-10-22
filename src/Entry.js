import React from 'react'
import './Entry.css'

function Entry() {
    return (
        <div className='entry'>
            <input type='text' placeholder='type the word'></input>
            <button>Submit</button>
        </div>
    )
}

export default Entry
