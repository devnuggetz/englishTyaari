import React from 'react'
import LobbyJoin from './LobbyJoin'
import Login from './Login'
import './LandingPage.css'
import WordDisplay from './WordDisplay'

function LandingPage() {
    return (
        <div className='landingPage'>
            <div className='landingPage__center'>
                <Login />
                <LobbyJoin />
            </div>
            <div className='landingPage__footer'>
                <WordDisplay />
            </div>
        </div>
    )
}

export default LandingPage
