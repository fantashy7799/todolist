import { useState } from 'react'
import './AddCard.css'
import TrashIcon from '../icon/Trash.png'
import { AddTaskApi } from '../../apiCall/Api'

function AddCard({handleOnClickAddCard, setDataTable}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [endTime, setEndTime] = useState('')

  async function addCard() {
    const data = {"title": title, "description": description, "end_time": endTime}
    const token = JSON.parse(localStorage.getItem('token'))

    try {
      const response = await AddTaskApi(data, token)
      handleOnClickAddCard(false)
      setDataTable([])
    } catch (error) {
      alert(Object.values(error.response.data.errors)[0])
    }
  }

  return (
    <div className="boxAddCard">
      <div className='__Box'>
        <input 
          type='text'
          className='__input'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          style={{'fontSize': '20px'}}
        ></input>
      </div>
      <div className="__Box">
        <input 
          type='text'
          className='__input'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          style={{'marginLeft': '10px'}}
        ></input>
      </div>
      <div className="__Box">
        <input 
          type='datetime-local'
          className='__input'
          placeholder='Day end task'
          onChange={(e) => {setEndTime(e.target.value); console.log(e.target.value)}}
          style={{
            'marginLeft': '10px'
          }}
        ></input>
      </div>
      <div className="__Box --button">
        <button 
          className='__button' 
          style={{"backgroundColor": "#fb2576"}}
          onClick={() => handleOnClickAddCard(false)}
        > 
          <img 
            src={TrashIcon} 
            alt='.' 
            style={{"width": "13px", "height": "13px"}}
          />
        </button>
        <button 
          className='__button'
          onClick = {() => {addCard()}}
          style={{"backgroundColor": "rgb(84, 105, 212)"}}
        >+</button>
      </div>
    </div>
  )
} 

export default AddCard