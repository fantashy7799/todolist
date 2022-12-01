import './Header.css'
import TodolistIcon from '../components/icon/TodolistIcon.png'
import LogOut from '../components/icon/LogOut.png'
import Avatar from '../components/icon/Avatar.jpg'
import UserComponent from '../components/UserComponent'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [userName, setUserName] = useState(() => name())
  const [isUser, setIsUser] = useState(false)

  const handleOnClickUser = () => {
    setIsUser(!isUser)
  }

  function name() {
    if (localStorage.getItem('name') == null) 
      return 'hello!'
      else return JSON.parse(localStorage.getItem('name'))
  }
  
  return(
    <div>
      <div className="header">
        <img 
          style={{
            "width": "40px", 
            "height": "40px", 
            "marginLeft": "20px"
          }} 
          src={TodolistIcon} 
          alt='Icon' 
        />
        <div className='header__nav'>
          <img 
            src={Avatar}
            alt={userName} 
            style={{
              "width": "40px", 
              "height": "40px", 
              "borderRadius":"50%", 
              "cursor": "pointer",
              "marginRight": "30px"
            }}
            onClick={() => handleOnClickUser()}
          />
        </div>
      </div>
      {isUser && <UserComponent />}
    </div>
  )
}

export default Header