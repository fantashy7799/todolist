import TodoList from '../components/TodoList';
import Header from '../layouts/Header';
import { Navigate } from 'react-router-dom';

function Main() {
  const token = localStorage.getItem('token')

  if (token == null) return <Navigate to='/login' replace/>

  return (
      <div>
        <Header />
        <TodoList />
      </div>
  )
}

export default Main;