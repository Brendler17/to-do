import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTaskBar.module.css';

interface NewTaskBarProps {
  createTask: (taskTitle: string) => void;
}

export function NewTaskBar({ createTask }: NewTaskBarProps) {

  const [taskTitle, setTaskTitle] = useState('');

  function handleChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskTitle(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTask(taskTitle);
    setTaskTitle('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("A tarefa não pode estar vazia.")
  }

  return (
    <form className={styles.taskBarContainer} onSubmit={handleCreateNewTask}>
      <input
        value={taskTitle}
        onChange={handleChangeTaskTitle}
        onInvalid={handleNewTaskInvalid}
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