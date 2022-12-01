import './LoginComponent.css'
import { LoginApi } from '../apiCall/Api' 
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

function LoginComponent() {

  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')

  const [newPage, setNewPage] = useState(false)

  async function handleOnClickSubmit() {
    const data = {"email": emailInput, "password": passInput}

    try {
      const response = await LoginApi(data)
      const accessToken = response.data

      localStorage.setItem('token', JSON.stringify(accessToken.data.token))
      localStorage.setItem('name', JSON.stringify(accessToken.data.name))

      setNewPage(true)
    } catch (error) {
      alert(error.response.data.error.message)
      console.log(error)
    }
  }

  if (newPage) return <Navigate to='/main' replace />

  return (
    <div>
      <h1>Login TodoList</h1>
      <div className='boxLogin'>'
        <div className='formLogin' onSubmit={() => handleOnClickSubmit()}>
          <div className='formLogin formLogin__user'>
            <div>
              Username
            </div>
            <input
              type='text'
              placeholder='Email'
              className='input'
              onChange={(e) => setEmailInput(e.target.value)}
            >
            </input>
          </div>
          <div className='formLogin formLogin__password'>
            <div>
              Password
            </div>
            <input
              type='password'
              placeholder='Password'
              className='input'
              onChange={(e) => setPassInput(e.target.value)}
            >
            </input>
          </div>
          <div className='formLogin formLogin__button --submit'>
            <button onClick={() => handleOnClickSubmit()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent