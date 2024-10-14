import React from 'react'
import './style/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="signup">
        <h1>SignUp</h1>
        <div className="field">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='your email' />
          <input type="password" placeholder='your password' />
          <button>Continue</button>
        </div>
        <p className="account">Already have an Account? <span>Login Here</span></p>
        <div className="login-agree">
          <input type="checkbox" id='' />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>  
      
    </div>
  )
}

export default Login
