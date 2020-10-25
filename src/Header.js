import React, { useContext } from 'react'
import './Header.css'
import Pulse from 'react-reveal/Pulse';
import { TimerContext } from './TimerContext';

function Header() {
    
    return (
        <div className='header'>
            <Pulse>
            <h1>English Tyaari</h1>
            </Pulse>
        </div>
    )
}

export default Header
