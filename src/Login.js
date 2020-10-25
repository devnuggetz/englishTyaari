import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className='login__card'>
             <h1>Already a member?</h1>
                <div className='login__card--login'> 
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
                <button>Login</button>
                </div>
                <div className='login__card--google'>
                <button>Login with Google</button>
                </div>
               
            </div>
        </div>
    )
}

export default Login
