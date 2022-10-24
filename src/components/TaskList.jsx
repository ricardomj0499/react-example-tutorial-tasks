import TaskCard from "./TaskCard"
import {useContext} from 'react'
import { TaskContext } from "../context/TaskContext"



export default function TaskList() {

  const {tsks} = useContext(TaskContext)
 
  if (tsks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {
        tsks.map(
          (task) => (<TaskCard key={task.id} task={task}  />)
        )
      }
    </div>
  )
}
