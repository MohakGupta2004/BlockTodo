import { useEffect, useState} from 'react'
import api from "../../api"
import Navigation from './Navigation'
function ViewAllTask() {
  const [tasks, setTasks] = useState([]) 
  useEffect(()=>{
    api.get("/eth/all").then((data)=>{
      console.log(data.data)
      setTasks(data.data.taskList) 
    }) 
  }, [])
  return (
    <div>
      <Navigation/>
      {tasks.map((item:{id: number, name: string, date: number})=>(
        <p>{item.name}</p>
      ))}
      
    </div>
  )
}

export default ViewAllTask
