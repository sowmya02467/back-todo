import React  , {useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  
  const handleAdd = () =>{
 axios.post('http://localhost:3001/add', {task : task})
 .then(result => {
  location.reload()
 })
 .catch(err => console.log(err))
}




  return (
    <div>
        <input type="text"   placeholder='Enter Task'    className='create-input-field'  onChange={(e) => setTask(e.target.value)}/>
        <button className='create-form-button ' onClick={handleAdd}> add</button>
    </div>
  )
}

export default Create