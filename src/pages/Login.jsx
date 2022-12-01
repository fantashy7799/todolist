import React from 'react';
import { Link } from 'react-router-dom'
import LoginComponent from '../components/LoginComponent'
import { Navigate } from 'react-router-dom';

function Login() {
  const token = localStorage.getItem('token')

  if (token != null) return <Navigate to='/main' replace/>

  return (
      <div>
        <LoginComponent />
        <div className='foodter __foodterLink'>
          <div>Don't have an account? <Link className='signUp' to='/register'>Sign up</Link></div>
          <Link to='/reset-password-request'><span style={{"color": "red"}}>Forgot you Pass?</span></Link>
        </div>
      </div>
  )
}

export default Login;