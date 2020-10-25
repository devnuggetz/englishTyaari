import React from 'react'
import LobbyJoin from './LobbyJoin'
import Login from './Login'
import './LandingPage.css'
import WordDisplay from './WordDisplay'

function LandingPage(props) {
    return (
        <div className='landingPage'>
            <div className='landingPage__center'>
                <Login 
                setUser={props.setUser}
                />
                <LobbyJoin />
            </div>
            <div className='landingPage__footer'>
                <WordDisplay />
            </div>
        </div>
    )
}

export default LandingPage
