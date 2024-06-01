import { useContext } from "react"
import { StatsCard } from "../StatsCard/StatsCard"
import styles from "./styles.module.scss"
import { TasksContext } from "../context/TaskContent"

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  console.log('Header:', tasks);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total,  tasks) => {
    if (!tasks.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;

  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem vindo, Lucas!</span>
        </div>

        <div>
          <StatsCard title="Total de tarefas" value={totalTasks}/>
          <StatsCard title="Tarefas Pendentes" value={totalPending}/>
          <StatsCard title="Tarefas Concluídas" value={totalDone}/>
        </div>
      </div>  
    </header>
  )
}