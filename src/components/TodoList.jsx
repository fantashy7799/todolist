import './TodoList.css'
import Card from './card/Card';
import AddCard from './card/AddCard';
import { GetDataList } from '../apiCall/Api'
import { useEffect, useState } from 'react';


function TodoList() {
  const [dataTable, setDataTable] = useState([])
  const [dataTodo, setDataTodo] = useState([])
  const [dataComp, setDataComp] = useState([])
  const [addCard, setAddCard] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      const token = JSON.parse(localStorage.getItem('token'))
      const response = await GetDataList(token)

      if (JSON.stringify(response.data.data) !== JSON.stringify((dataTable)))
        setDataTable(response.data.data)
    }
    fetchData()

    const getDataTodo = dataTable.filter((item) => {
      return item.status === 0
    })

    const getDataComp = dataTable.filter((item) => {
      return item.status === 1
    })

    setDataTodo([...getDataTodo])
    setDataComp([...getDataComp]) 
  }, [dataTable])

  function handleOnClickAddCard() {
    setAddCard(!addCard)
  }

  return (
    <div className='todoList'>  
      <div>
        <h2>Todo</h2>
        <div 
          className='button --addNewCard'
          onClick={() => handleOnClickAddCard()}
        >+ Add card</div>
        {addCard && 
          <AddCard 
            handleOnClickAddCard={handleOnClickAddCard} 
            setDataTable={setDataTable}
          />
        } 
        <div className='todoList todoList__Todo'>
          {dataTodo.map((data) => (
            
            <Card 
              key={data.id} 
              idText={data.id} 
              title={data.title}
              description={data.description} 
              time={data.end_time} 
              typeTable='todo'
              setDataTable={setDataTable}/> 
          ))}
        </div>
      </div> 
      {(dataComp.length !== 0) &&
        <div>
          <h2>Completed</h2>
          <div className='todoList todoList__Compl'>
            {dataComp.map((data) => (
              <Card 
                key={data.id} 
                idText={data.id} 
                title={data.title}
                description={data.description} 
                time={data.end_time}
                typeTable='compl'
                setDataTable={setDataTable}/>
            ))}
          </div>
        </div>  
      }
  </div>
  )
}

export default TodoList;