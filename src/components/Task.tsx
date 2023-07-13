import { ChangeEvent, MouseEvent } from 'react';
import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
  checkTask: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

export function Task({
  id,
  title,
  isComplete,
  //checkTask,
  removeTask }
  : TaskProps) {

  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    // event.preventDefault();
    // checkTask(id);
    console.log(event.target.checked);
  }

  function handleRemoveTask(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    removeTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <input type="radio" onChange={handleCheckTask} checked={isComplete} />
      <p>{title}</p>
      <button title="Deletar Task" onClick={handleRemoveTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}