import './Card.css'
import { useState } from "react";
import TrashIcon from '../icon/Trash.png'
import { DeleteTaskApi, ChangeStatusApi, EditTaskApi } from '../../apiCall/Api';
import ConvertTime from '../logic/ConvertTime';

function Card({ idText, title, description, time, typeTable, setDataTable }) {
  const [changeTitle, setChangeTitle] = useState(title)
  const [changeDescription, setChangeDescription] = useState(description)
  const [changeTime, setChangeTime] = useState(ConvertTime(time))

  function handleOnClickTitle() {
    if (typeTable === 'todo')
    {
      const nodeElement = document.getElementById(String(idText))

      nodeElement.removeAttribute('disabled')
      nodeElement.style.border = '0.5px solid black';
      nodeElement.focus()
    }
  }

  function handleOnClickDescription() {
    if (typeTable === 'todo'){
      const nodeElement = document.getElementById(String(idText)+'description')

      nodeElement.removeAttribute('disabled')
      nodeElement.style.border = '0.5px solid black';
      nodeElement.focus()
    }
  }

  async function handleOnBlurTitle() {
    const nodeElement = document.getElementById(String(idText))

    nodeElement.setAttribute('disabled', 'disabled')
    nodeElement.style.border = 'none'

    const token = JSON.parse(localStorage.getItem('token'))
    const data = {"title": changeTitle, "description": changeDescription, "end_time": changeTime}
    await EditTaskApi(idText, token, data)

  }

  async function handleOnBlurDescription() {
    const nodeElement = document.getElementById(String(idText)+'description')

    nodeElement.setAttribute('disabled', 'disabled')
    nodeElement.style.border = 'none'

    const token = JSON.parse(localStorage.getItem('token'))
    const data = {"title": changeTitle, "description": changeDescription, "end_time": changeTime}
    await EditTaskApi(idText, token, data)
  } 

  async function handleOnBlurTime() {
    const token = JSON.parse(localStorage.getItem('token'))
    const data = {"title": changeTitle, "description": changeDescription, "end_time": changeTime}
    await EditTaskApi(idText, token, data)
  }

  async function handleOnDelete() {
    const token = JSON.parse(localStorage.getItem('token'))
    await DeleteTaskApi(idText, token)
    setDataTable([])
  }

  async function handleOnChangeStatus() {
    const token = JSON.parse(localStorage.getItem('token'))
    await ChangeStatusApi(idText, token)
    setDataTable([])
  }

  return (
    <div className='box'>
      {(typeTable === 'todo') && 
        <input
          className='input__Radio' 
          type='radio' 
          style={{display: "inline"}}
          onClick={() => handleOnChangeStatus()}
        ></input>
      }
      <div onClick={() => handleOnClickTitle()} style={{display: "inline"}}>
        <input
          id={String(idText)}
          className='input __inputTitle'
          onBlur={() => handleOnBlurTitle()}
          type='text'
          value={changeTitle}
          onChange={(e) => {setChangeTitle(e.target.value)}}
          style={{border: "none"}}
          disabled
        ></input>
      </div>
      <button 
        className='__button' 
        style={{display: "inline"}}
        onClick={() => handleOnDelete()}
      >
        <img 
          src={TrashIcon} 
          alt='.'
          style={{"width": "13px", "height": "13px"}} 
        />
      </button>
      <div onClick={() => handleOnClickDescription()}>
        <input 
          id={String(idText)+'description'}
          onBlur={() => handleOnBlurDescription()}
          className='input__Description'
          disabled={true}
          value = {changeDescription}
          onChange={(e) => {setChangeDescription(e.target.value)}}
          style={{
            'border': 'none',
          }}
        ></input>
      </div>
      <input 
        className='input__DateTime'
        type='datetime-local'
        onBlur={() => handleOnBlurTime()}
        style={{border: "none", display: "block"}}
        value={changeTime}
        onChange={(e) => setChangeTime(e.target.value)}
        disabled ={(typeTable === 'compl') ? true : false}
      ></input>
    </div>
  )
}

export default Card;