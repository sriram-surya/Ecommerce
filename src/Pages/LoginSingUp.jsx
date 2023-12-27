import React from 'react'
import './css/loginsingup.css'

const LoginSingUp = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginfields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" />
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingUp