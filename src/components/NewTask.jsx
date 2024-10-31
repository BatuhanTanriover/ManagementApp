/* eslint-disable react/prop-types */
import { useState } from "react"



export default function NewTask({onAdd}) {

  const [enteredTask, setenteredTask] = useState("")

  const handleChange = (event) => {
    setenteredTask(event.target.value);
  }

  const handleClick = () => {
    if(enteredTask.trim() === ""){
      return;
    }
    onAdd(enteredTask)
    setenteredTask("");
    
  }
  return (
    <div className="flex items-center gap-4">
        <input value={enteredTask} onChange={handleChange} type="text" className="w-64 px-2 rounded-sm bg-stone-200" />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  )
}
