import React from 'react'
import LobbyJoin from './LobbyJoin'
import Login from './Login'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landingPage'>
            <Login />
            <LobbyJoin />
            
        </div>
    )
}

export default LandingPage
