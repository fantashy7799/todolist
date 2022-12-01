import axios from "axios";

export const LoginApi = async (data) => {
  const res = await axios.post(
    'http://10.20.55.249:80/api/login',
    JSON.stringify(data),
    {
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      }  
    }
  );

  return res
}

export const LogoutApi = async (token) => {
  const res = axios.get(
    `https://checkpoint360webgroup.tk/api/logout`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const RegisApi = async (data) => {
  const res = await axios.post(
    'http://10.20.55.249:80/api/register',
    data,
    {
      headers: {
        "Accept": "application/json"
      }
    }
  );

  return res
}

export const GetDataList = async (token) => {
  const res = await axios.get(
    'http://10.20.55.249:80/api/tasks',
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )

  return res
} 

export const AddTaskApi = async (data, token) => {
  const res = await axios.post(
    'http://10.20.55.249:80/api/task/new', 
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const DeleteTaskApi = async (idTask, token) => {
  const res = await axios.delete(
    `http://10.20.55.249:80/api/task/${idTask}`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const ChangeStatusApi = async (idTask, token) => {
  const res = await axios.get(
    `http://10.20.55.249:80/api/task/${idTask}/change-status`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const EditTaskApi = async (idTask, token, data) => {
  const res = await axios.post(
    `http://10.20.55.249:80/api/task/${idTask}`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const ChangePassApi = async (data, token) => {
  const res = await axios.post(
    `http://10.20.55.249:80/api/change-password`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
  return res
}

export const ResetPassRequestApi = async (data) => {
  const res = await axios.post(
    'http://10.20.55.249:80/api/reset-password-request',
    data,
    {
      headers: {
        "Accept": "application/json"
      }
    }
  )
  return res
}

export const ResetPassApi = async (data) => {
  const res = await axios.post(
    `http://10.20.55.249:80/api/reset-password`,
    data,
    {
      headers: {
        "Accept": "application/json"
      }
    }
  )
  return res
}