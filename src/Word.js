import React from 'react'
import './Word.css'
import HearingIcon from '@material-ui/icons/Hearing';

function Word() {
    return (
        <div className='word'>
            <div className='word__text'>
                <HearingIcon />
            </div>
            
            <p>1: having a smooth rich flow
                a mellifluous voice
                <br/>
                2: filled with something (such as honey) that sweetens
                mellifluous confections</p>
        </div>
    )
}

export default Word
