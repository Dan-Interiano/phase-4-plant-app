import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Welcome.css';

export default function Welcome({ setUser }) {
  
  return (
    <div className='welcome-container'>
        <h1 >Welcome to the Garden!</h1>
        <div className='com-container'>
        <Login setUser={setUser}/>
        <h2 className='or-title'>OR</h2>
        <SignUp setUser={setUser}/>
        </div>
    </div>
  )
}
