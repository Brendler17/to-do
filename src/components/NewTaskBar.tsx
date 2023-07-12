import { PlusCircle } from '@phosphor-icons/react'

export function NewTaskBar() {
  return (
    <form>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={24} />
      </button>
    </form>
  )
}