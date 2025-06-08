import React from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
    const navigate=useNavigate()
    const back=()=>{
          navigate('')

    }
  return (
    <div>
        <h1>Something Went wrong</h1>
        <button onClick={back}>Back To Home Page</button>
    </div>
  )
}

export default Error