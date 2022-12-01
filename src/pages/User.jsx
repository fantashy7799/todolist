import { Navigate } from 'react-router-dom'
import UserComponent from '../components/UserComponent';

function User({ isLogin }) {
  return (
      <div>
        <UserComponent />
      </div>
  )
}

export default User;