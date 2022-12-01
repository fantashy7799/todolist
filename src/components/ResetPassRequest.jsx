import './ResetPassRequest.css'
import { ResetPassRequestApi } from '../apiCall/Api'
import { useState } from "react"

function ResetPassRequest() {
  const [email, setEmail] = useState('')
  
  async function handleOnClickSendMailRequest() {
    const data = {"email": email}

    localStorage.setItem('email', JSON.stringify(email))

    try {
      const response = await ResetPassRequestApi(data)
      alert(response.data.data)
    } catch (error) {
      alert(error.response.data.error.message)
    }
  }

  return(
    <div className='boxReset'>
      <div className="boxResetPassRequest">
        <h4>Do you remember your Email?</h4>
        <input
          className='boxResetPassRequest__input' 
          type="text" 
          placeholder="Your email?"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          className='boxResetPassRequest__button'
          onClick={() => handleOnClickSendMailRequest()}>
          Next step
        </button>
      </div>
    </div>
  )
}

export default ResetPassRequest