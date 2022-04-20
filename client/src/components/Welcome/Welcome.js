import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Welcome.css';

export default function Welcome() {
  return (
    <div className='welcome-container'>
        <h1 >Welcome to the Garden!</h1>
        <div className='com-container'>
        <Login />
        <h2 className='or-title'>OR</h2>
        <SignUp />
        </div>
    </div>
  )
}
