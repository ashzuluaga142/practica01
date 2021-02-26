import { isEmpty, size } from 'lodash'
import React, { useState }from 'react' /* importar  el primer estado hut */
import shortid from 'shortid'

function App() {
  const [task, setTask]= useState("") /* cuando el  usuairo ingrese algo  */
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode]= useState(false)
  const [id, setId]= useState("")
  const [error,setError]= useState(null)

  const validForm = () => {
    let isValid = true
    setError(null)

    if(isEmpty(task)){
      setError("Debes de ingresar una Tarea.")
      isValid =false
      return
    } 
     return isValid
  }
  
  const addTask =(e) => {
    e.preventDefault() 
       if (!validForm()){
         return
       }


     const newTask = {
       id: shortid.generate(),
       name: task
     }
     setTasks([...tasks, newTask ])

     setTask("") /* despues de decir si  la tarea esta correcta lo vamos   a dejar nulo */
  }

  const saveTask =(e) => {
    e.preventDefault() 

    if (!validForm()){
      return
    }
     const editedTasks = tasks.map(item =>item.id=== id ? {id, name : task} : item)
     setTasks(editedTasks)
     setEditMode(false)
     setTask("") 
     setId("")
  }

  const deleteTask = (id) =>{
         const filterdTasks = tasks.filter(task => task.id !==id)
         setTasks(filterdTasks)
       }
    

   const editTask = (theTask) =>
   {
     setTask(theTask.name)
     setEditMode(true)
    setId(theTask.id)

  }
  return (
    <div className ="container mt-5">
      <h1>TAREAS</h1>
      <hr/>
         <div className="row">
            <div className="col-8">
              <h4 className="text-center">Lista de Tareas</h4>
             
                  {  
               size(tasks) == 0 ?(
                  <li className= "list-group-item">AUN NO HAY TAREAS PROGRAMADAS.</li>
                  ): (
                    <ul className="list-group">
                       {
                        tasks.map((task) => ( 
                         <li className="list-group-item"key={task.id} >
                         <span className="lead">{task.name}</span>
                         <button className="btn btn-danger btn-sm float-right mx-2"
                         onClick={() => deleteTask(task.id) }
                         >
                        Eliminar
                       </button> 
                       <button className="btn btn-warning btn-sm float-right"
                        onClick={() => editTask(task) }
                       >
                        Editarr
                       </button>
                      </li>
                       ))
                      }
                    </ul>
                  )
                  
              }

            </div>
            <div className="col-4">
            <h4 className= "tex-center">
             { editMode ? "Modificar Tarea" : "Agregar Tarea"}
            </h4>
            
            <form onSubmit={editMode ? saveTask : addTask }> 

            {
             error && <span className="text-danger mb-2">{error}</span>
            } 
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese la Tarea"
                /* el metodo onchange nos hace una funcion tipo flecha  */
                onChange={(text)=> setTask(text.target.value)}/* cuando   ingrese  algo en  tarea  
                vamos  asginarle a la variale task */
                value={task}/* limpiar la tarea  */
              />  
               
            
            <button
             className={ editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"}
              /* como colocamos un  boton tipo submit "va a disparar la accion del  formulario y se modifica e
              el metodo <form onSubmit={addTask}>"cuando el metodo requiere parametros  tenemos qye  hacer la funciona  flecha
              pero en este caso  no necesitamos parametros */
             type="submit"
            >
              { editMode ? "Guardar" : "Agregar"}
            </button>
            </form>
            </div>
         </div>
    </div>
  )
}

export default App