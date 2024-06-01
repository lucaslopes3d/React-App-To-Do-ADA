import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { TasksContext } from "../context/TaskContent"

// interface Task {
//   title: string
//   done: boolean
//   id: number
// }

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("")
  // const [tasks, setTasks] = useState([] as Task[])

  const { tasks, setTasks, handleToggleTasksStatus, /*handleRemoveTask*/ } = useContext(TasksContext)

//fução disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault()
    
    if(taskTitle.length < 3){
      alert("Não é possível adicionar uma tarefa com menos de 3 letras.")
      return
    }

    // Adicionar tarefa
    const newTasks = [
    ...tasks,//Pega todas as tarefas que já existiam e coloca nesse novo valor de estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false }
    ];
    setTasks(newTasks);
    localStorage.setItem('Tasks', JSON.stringify(newTasks));
    
    setTaskTitle("");
  }


  return(
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>

        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          type="text" 
          id="task-title" 
          placeholder="Título da Tarefa" />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <input 
              type="checkbox" 
              id={`task-${task.id}`} 
              onChange={() => handleToggleTasksStatus(task.id)} 
              />

              <label htmlFor={`task-${task.id}`}
              className={ task.done ? styles.done : "" }>{task.title}
              </label>

              {/* <button onClick={}>Remover Tarefa</button> */}
            </li>     
          )
        })}
      </ul>
    </section>
  )
}