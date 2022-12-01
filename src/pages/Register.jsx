import RegisterComponent from "../components/RegisterComponent";
import { Link } from 'react-router-dom'

function Register() {
  return (
      <div>
        <RegisterComponent />
        <div className='foodter __foodterLink'>
          <span>Do you wanna go back to <Link className='signUp' to='/login'>Login?</Link></span>
        </div>
      </div>
  )
}

export default Register;