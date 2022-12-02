import axios from "axios";

const Api = 'https://checkpoint360webgroup.tk'

export const LoginApi = async (data) => {
  const res = await axios.post(
    `${Api}/api/login`,
    JSON.stringify(data),
    {
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }  
    }
  );

  return res
}

export const LogoutApi = async (token) => {
  const res = axios.get(
    `${Api}/api/logout`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const RegisApi = async (data) => {
  const res = await axios.post(
    `${Api}/api/register`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  );

  return res
}

export const GetDataList = async (token) => {
  const res = await axios.get(
    `${Api}/api/tasks`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )

  return res
} 

export const AddTaskApi = async (data, token) => {
  const res = await axios.post(
    `${Api}/api/task/new`, 
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const DeleteTaskApi = async (idTask, token) => {
  const res = await axios.delete(
    `${Api}/api/task/${idTask}`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const ChangeStatusApi = async (idTask, token) => {
  const res = await axios.get(
    `${Api}/api/task/${idTask}/change-status`,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const EditTaskApi = async (idTask, token, data) => {
  const res = await axios.post(
    `${Api}/api/task/${idTask}`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const ChangePassApi = async (data, token) => {
  const res = await axios.post(
    `${Api}/api/change-password`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const ResetPassRequestApi = async (data) => {
  const res = await axios.post(
    `${Api}/api/reset-password-request`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}

export const ResetPassApi = async (data) => {
  const res = await axios.post(
    `${Api}/api/reset-password`,
    data,
    {
      headers: {
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "Set and send an ngrok-skip-browser-warning request header with any value."
      }
    }
  )
  return res
}