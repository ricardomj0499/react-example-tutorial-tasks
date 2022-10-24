
import {useEffect, createContext , useState} from "react";
import {tasks} from '../data/tasks'



export const TaskContext = createContext()

export function TaskContextProvider(props)  {
  const [tsks, setTsks] = useState([])

  useEffect(() => {
    setTsks(tasks)
  }, [])

  function createTask(taskTitle, taskDesc) {
    setTsks([...tsks, {
      title: taskTitle,
      id: tsks.length+1,
      desc: taskDesc
    }])
  }

  function deleteTask(taskId) {
    //const index = array.indexOf(tsks.);
    //if (index > -1) { // only splice array when item is found
      //array.splice(index, 1); // 2nd parameter means remove one item only
    //}
    console.log("deleting con taskid:", taskId)
    setTsks(tsks.filter((task) => task.id !== taskId))
  }
  return (
    <TaskContext.Provider value={{
      tsks,
      createTask,
      deleteTask
    }} >
      {props.children}
    </TaskContext.Provider>
  )
}
