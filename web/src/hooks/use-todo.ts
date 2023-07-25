import { StateCreator, create } from 'zustand'
import api from '@/lib/api'
import { persist } from 'zustand/middleware'
import notify from '@/components/Notify'

type TaskStore = {
  tasks: Task[]
  draggedTask: string | null | undefined
  setDraggedTask: (id?: string) => void
  addTask: (todo: Task) => void
  deleteTask: (id: string) => void
  deleteAllTasks: () => void
  moveTask: (id: string, state: keyof typeof States) => void
  markAsDone: (id: string) => void
}

const store: StateCreator<TaskStore> = (set, getState) => ({
  tasks: [],
  draggedTask: null,
  deleteAllTasks: () => set({ tasks: [] as Task[] }),
  setDraggedTask: (id?: string) => set((s) => ({ draggedTask: id })),
  addTask: ({ id, title, state }: Task) => {
    set((s) => ({
      tasks: [
        ...s.tasks,
        { id, title, state, createdAt: new Date().toISOString(), done: false },
      ],
    }))
    notify({
      message: 'Task successfully',
    })
  },

  deleteTask: (id: string) =>
    set((s) => ({ tasks: s.tasks.filter((task) => task.id !== id) })),
  markAsDone: (id: string) =>
    set((s) => ({
      tasks: s.tasks.map((task) =>
        task.id === id ? { ...task, done: true, state: 'DONE' } : task
      ),
    })),
  moveTask: (id: string, state: keyof typeof States) =>
    set((s) => ({
      tasks: s.tasks.map((task) =>
        task.id === id ? { ...task, state } : task
      ),
    })),
})

export const useTodo = create(store)
