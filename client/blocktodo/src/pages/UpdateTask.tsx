import { useState } from "react"

function UpdateTask({state}) {
  const [taskName, setTaskName] = useState("")
  const [taskId, setTaskId] = useState(0)
  const handleSubmit = async(e)=>{
  e.preventDefault() 
  const {contract, account} = state;  
    if(contract && account){
      await contract.methods.updateTask(taskId, taskName).send({
        from: account
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="name" value={taskName} onChange={(e)=>{
          setTaskName(e.target.value)
        }}/>
        <input id="taskId" value={taskId} onChange={(e)=>{
          setTaskId(Number(e.target.value))
        }}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateTask
