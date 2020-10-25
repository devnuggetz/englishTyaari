import React from 'react'
import './LobbyJoin.css'

function LobbyJoin() {
    return (
        <div className='lobbyJoin'>
            <div className='lobbyJoin__card'>
            <h1>Have a code to join?</h1>
                <div className='lobbyJoin__card--code'> 
                <input placeholder='Enter Code Here'></input>
                <button>Login</button>
                </div>
                <div className='lobbyJoin__card--create'>
                <button>Create a Room</button>
                </div>
               
            </div>
        </div>
    )
}

export default LobbyJoin
