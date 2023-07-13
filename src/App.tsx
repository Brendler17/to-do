import { useState } from 'react';
import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';
import { Task } from './components/Task';
import { ClipboardText } from '@phosphor-icons/react';
import styles from './global.module.css';
import './global.module.css';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(taskTitle: string) {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: taskTitle,
      isComplete: false
    }
    setTasks([...tasks, newTask]);
  }

  function checkTask(taskId: number) {
    const newTasks = tasks.map(task => (
      task.id === taskId ? (
        {
          ...task,
          isComplete: !task.isComplete
        }
      ) : (task)
    ));
    console.log(newTasks);
    setTasks(newTasks);
  }

  function removeTask(taskId: number) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  const tasksIsEmpty = tasks.length === 0;
  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.filter(task => task.isComplete).length;

  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <NewTaskBar createTask={createTask} />
        <div className={styles.tasksContainer}>
          <div className={styles.tasksBoxHeader}>
            <strong>Tarefas Criadas {totalTasks}</strong>
            <strong>Concluídas {totalTasksCompleted} de {totalTasks}</strong>
          </div>
          <div className={styles.tasksBoxContent}>
            {tasksIsEmpty ? (
              <div className={styles.taskContentEmpty}>
                <ClipboardText size={50} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ) : (
              tasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isComplete={task.isComplete}
                  checkTask={checkTask}
                  removeTask={removeTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}
