import { RegisApi } from '../apiCall/Api';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './RegisterComponent.css'

function RegisterComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cfPass, setCfPass] = useState('')

  const [backToLogin, setBackToLogin] = useState(false)

  if (backToLogin) return <Navigate to='/login' replace/>

  async function handleOnClickSubmit() {
    const data = {
      "name": name,
      "email": email,
      "password": pass,
      "password_confirmation": cfPass
    }

    try {
      const response = await RegisApi(data)
      alert(response.data.data)
      setBackToLogin(true)
    } catch (error) {
      alert(Object.values(error.response.data.errors)[0])
    }
  }

  return (
    <div className='register'>
      <h1>Register TodoList</h1>
      <div className="boxRegister">
      <div className="formRegister">
        <div className="formRegister formRegister__name">
          <div>What your name?</div>
          <input
            type='text'
            placeholder="Name"
            className='input'
            onChange={(e) => setName(e.target.value)}
          >
          </input>
        </div>
        <div className="formRegister formRegister__user">
          <div>Username</div>
          <input
            type='text'
            placeholder="Email"
            className='input'
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
        </div>
        <div className="formRegister formRegister__password">
          <div>Password</div>
          <input
            type='Password'
            placeholder="Password"
            className='input'
            onChange={(e) => setPass(e.target.value)}
          >
          </input>
        </div>
        <div className="formRegister formRegister__password">
          <div>Confirm password</div>
          <input
            type='Password'
            placeholder="Password"
            className='input'
            onChange={(e) => setCfPass(e.target.value)}
          >
          </input>
        </div>
        <div className='formRegister formRegister__button --submit'>
          <button onClick={handleOnClickSubmit}>Register</button> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default RegisterComponent;