
import {useEffect, createContext , useState} from "react";
import {tasks} from '../data/tasks'

/* El contexto global dentro del que va a estar toda la App
Esto para tener la lista de tareas A mano desde cualquier componente de la App
Asi como sus funciones
*/
export const TaskContext = createContext()

export function TaskContextProvider(props)  {
  const [tsks, setTsks] = useState([])

  useEffect(() => {
    setTsks(tasks)
  }, [])

  // toDo: Como guardar en el archivo la task
  function createTask(taskTitle, taskDesc) {
    setTsks([...tsks, {
      title: taskTitle,
      id: tsks.length+1,
      desc: taskDesc
    }])
  }

  //Como eliminar del archivo
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
