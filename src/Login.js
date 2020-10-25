import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'

function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result)
        }).catch(error=>alert(error.message))
    }
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
                <button onClick={signIn}>Login with Google</button>
                </div>
               
            </div>
        </div>
    )
}

export default Login
