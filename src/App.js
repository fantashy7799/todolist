import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import ResetPassRequest from './components/ResetPassRequest';
import ResetPass from './components/ResetPass';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<Main/>} />
        <Route path='/reset-password-request' element={<ResetPassRequest />} />
        <Route path='/reset-password' element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
