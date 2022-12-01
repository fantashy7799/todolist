import './ResetPass.css'
import { useState } from 'react'
import { ResetPassApi } from '../apiCall/Api'
import { Navigate } from 'react-router-dom'

function ResetPass() {
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [newPage, setNewPage] = useState(false)

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const token = urlParams.get('token')

  async function handleOnAccept() {
    const email = JSON.parse(localStorage.getItem('email'))
    const data = {"email": email, "token": token, "password": pass, "password_confirmation": confirmPass}

    try {
      const response = await ResetPassApi(data)
      localStorage.removeItem('email')
      alert(response.data.data)
      setNewPage(true)
    } catch (error) {
      alert(Object.values(error.response.data.errors)[0])
    }
  }

  if (newPage) return <Navigate to='/login' replace />

  return (
    <div className='boxReset'>
      <div className="boxResetPass">
        <h4>Set your new pass</h4>
        <input
          className='boxResetPass__input' 
          type="password" 
          placeholder="Your new pass"
          onChange={(e) => setPass(e.target.value)}
        /> 
        <input
          className='boxResetPass__input' 
          type="password" 
          placeholder="Confirm your new pass"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button 
          className='boxResetPass__button'
          onClick={() => handleOnAccept()}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default ResetPass