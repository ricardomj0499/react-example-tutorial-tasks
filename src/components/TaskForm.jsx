
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  
  const {createTask} = useContext(TaskContext)
  const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmitt = (e) => {
        e.preventDefault()
        createTask(title,desc)
        setTitle('')
        setDesc('')
    }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmitt} className='bg-slate-800 p-10 mb-4 '>
          <h1 className='text-2xl font-bold text-white mb-3'>Crea Tu tarea</h1>
           <input 
           placeholder="Escribe la tarea" 
           onChange={(e) => setTitle(e.target.value)}
           value={title}
           className='bg-slate-300 p-3 w-full mb-2'/>
           <textarea 
            placeholder='Escribe la descripcion de la tarea' 
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className='bg-slate-300 p-3 w-full mb-2'>
            </textarea>
           <button
           className='bg-indigo-500 px-3 py-1 text-white'>Save</button>
        </form>
    </div>
        
  )
}

export default TaskForm
