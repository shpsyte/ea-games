import { StateCreator, create } from 'zustand'
import api from '@/lib/api'

type Todo = {
  id: number
  title: string
  states: States
}

type TodoStore = {
  todos: Todo[]
}

const store: StateCreator<TodoStore> = (set) => ({
  todos: [],
  addTodo: ({ title, states }: Todo) =>
    set((s) => ({
      todos: [...s.todos, { id: s.todos.length + 1, title, states }],
    })),
  deleteTodo: ({ title }: Todo) =>
    set((s) => ({ todos: s.todos.filter((task) => task.title !== title) })),
  moveTodo: () => set((s) => s),
})

export const useTodo = create(store)
