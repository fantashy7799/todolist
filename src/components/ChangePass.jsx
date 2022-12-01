import './ChangePass.css'
import { ChangePassApi } from '../apiCall/Api'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function ChangePass({ handleClickChangePass }) {
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setconfirmPass] = useState('')
  const [newPage, setNewPage] = useState(false)

  async function handleClickConfirm() {
    const data={"old_password": currentPass, "password": newPass, "password_confirmation": confirmPass}
    const token = JSON.parse(localStorage.getItem('token'))

    try {
      const response = await ChangePassApi(data, token)

      alert(response.data.data)
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      setNewPage(true)
    } catch (error) {
      alert(Object.values(error.response.data.errors)[0][0])
    }
  }

  if (newPage) return <Navigate to='/login' replace/>

  return (
    <div className="boxChangePass">
        <div className="boxChangePass__Input">
          <input 
            className='--InputChange' 
            type='password' 
            placeholder="Current pass" 
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          <input 
            className='--InputChange' 
            type='password' 
            placeholder="New Pass" 
            onChange={(e) => setNewPass(e.target.value)}
          />
          <input 
            className='--InputChange' 
            type='password' 
            placeholder="Confirm Pass" 
            onChange={(e) => setconfirmPass(e.target.value)}
          />
        </div>
        <div className="boxChangePass__Button">
          <button 
            className="--ButtonChange" 
            style={{"backgroundColor": "#fb2576"}}
            onClick={() => handleClickChangePass()}
          >
            Cancel
          </button>
          <button 
            className="--ButtonChange"
            onClick={() => handleClickConfirm()}
          >
            Change
          </button>
        </div>
    </div>
  )
}

export default ChangePass