import React, { createContext, useEffect, useState } from "react";

export interface Task {
  title: string
  done: boolean
  id: number
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleToggleTasksStatus: (taskId: number) => void;
  // handleRemoveTask: (taskId: number) => void;
}

export const TasksContext = createContext({} as TasksContextData);

interface tasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider: React.FC<tasksProviderProps> = ({children}) => {
  const [tasks, setTasks] = useState([] as Task[])


//Alterar status da tarefa
  function handleToggleTasksStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })

    setTasks(newTasks)
  }


//ESTUDAR DEPOIS COMO IMPLEMENTAR ESSE CÓDIGO
  function handleRemoveTask(taskId: number) {
    }


  useEffect(() => {
    const taskOnLocalStorage = localStorage.getItem('Tasks');
    
    if(taskOnLocalStorage){
      setTasks(JSON.parse(taskOnLocalStorage));
    }
  }, []);
  
  return (
    <TasksContext.Provider value={{
      tasks,
      setTasks,
      handleToggleTasksStatus,
      // handleRemoveTask
    }}>
      { children }
    </TasksContext.Provider>
  )
}