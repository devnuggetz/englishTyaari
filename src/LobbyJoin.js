import React from 'react'
import './LobbyJoin.css'

function LobbyJoin() {
    return (
        <div className='lobbyJoin'>
            <div className='lobbyJoin__card'>
                <h1>Have a code?</h1>
                <input placeholder='Enter the code'></input>
                <button>Join</button>
                <h1>Create a room</h1>
                <button>Create</button>
            </div>
        </div>
    )
}

export default LobbyJoin
