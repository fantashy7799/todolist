import './UserComponent.css'
import LogOut from '../components/icon/LogOut.png'
import ChangePass from './ChangePass'
import { LogoutApi } from '../apiCall/Api'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserComponent() {
  const [changePass, setChangePass] = useState(false)

  const handleClickChangePass = () => {
    setChangePass(!changePass)
  }

  const userName = JSON.parse(localStorage.getItem('name'))

  const isLogOut = async () =>{
    const token = localStorage.getItem('token')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    await LogoutApi(token)
  }

  return (
    <div className='boxUser'>
      <h3 className='boxUser__UserName'>{userName}</h3>
      {
        changePass  
          ?<ChangePass handleClickChangePass={ handleClickChangePass }/>
          :<div className='boxButton'>
            <button 
              className='boxButton__button --Changepass'
              onClick={() => handleClickChangePass()}
            >
              Change Password
            </button>
            <Link to='/login'>
              <img 
                className='boxButton__Img'
                src={LogOut} 
                alt='LogOut' 
                style={{
                  "width": "30px", 
                  "height": "30px"}}
                onClick={() => isLogOut()}
              />
            </Link>
          </div>
      }   
    </div>
  )
}

export default UserComponent