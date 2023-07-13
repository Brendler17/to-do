import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTaskBar.module.css';

interface NewTaskBarProps {
  createTask: (taskTitle: string) => void;
}

export function NewTaskBar({ createTask }: NewTaskBarProps) {

  const [taskTitle, setTaskTitle] = useState('');

  function handleChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTask(taskTitle);
    setTaskTitle('');
  }

  return (
    <form className={styles.taskBarContainer} onSubmit={handleCreateNewTask}>
      <input
        value={taskTitle}
        onChange={handleChangeTaskTitle}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}