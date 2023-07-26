import { StateCreator, create } from 'zustand'
import { api } from '@/lib/api'
import { persist } from 'zustand/middleware'
import notify from '@/components/Notify'

type TaskStore = {
  tasks: Task[]
  draggedTask: string | null | undefined
  setTasks: (tasks: Task[]) => void
  setDraggedTask: (id?: string) => void
  addTask: (todo: Task) => void
  deleteTask: (id: string) => void
  deleteAllTasks: () => void
  moveTask: (id: string, state: keyof typeof States, done?: boolean) => void
  markAsDone: (id: string) => void
}

const store: StateCreator<TaskStore> = (set, getState) => ({
  tasks: [],
  draggedTask: null,
  setTasks: (tasks: Task[]) =>
    set((s) => ({
      tasks: [...s.tasks, ...tasks],
    })),
  deleteAllTasks: async () => {
    try {
      await api.delete<Task>('/task/all')
      set({ tasks: [] as Task[] })
      notify({
        message: 'Tasks deleted successfully',
      })
    } catch (error) {
      console.log(error)
      notify({
        message: 'An error occurred while deleting tasks.',
        type: 'error',
      })
    }
  },
  setDraggedTask: (id?: string) => set((s) => ({ draggedTask: id })),
  addTask: async ({ id, title, state }: Task) => {
    // validate title
    if (!title || title.length === 0 || title.trim().length === 0 || !state) {
      const message = !state
        ? 'Task state is required'
        : 'Task name is required'
      notify({
        message,
        type: 'error',
      })
      return
    }

    try {
      const respose = await api.post<Task>('/task', { title, state })
      const task = respose.data

      set((s) => ({
        tasks: [...s.tasks, task],
      }))

      notify({
        message: 'Task added successfully',
      })
    } catch (error) {
      console.log(error)
      notify({
        message: 'An error occurred while creating the task.',
        type: 'error',
      })
    }
  },

  deleteTask: async (id: string) => {
    try {
      await api.delete<Task>(`/task/${id}`)
      set((s) => ({ tasks: s.tasks.filter((task) => task.id !== id) })),
        notify({
          message: 'Task deleted successfully',
        })
    } catch (error) {
      console.log(error)
      notify({
        message: 'An error occurred while deleting the task.',
        type: 'error',
      })
    }
  },
  markAsDone: async (id: string) => {
    try {
      await api.put<Task>(`/task/${id}`, {
        done: true,
        state: 'done',
      })
      set((s) => ({
        tasks: s.tasks.map((task) =>
          task.id === id ? { ...task, done: true, state: 'done' } : task
        ),
      })),
        notify({
          message: '🦊 Uhul! Task marked as done',
        })
    } catch (error) {
      console.log(error)
      notify({
        message: 'An error occurred while updating the task.',
        type: 'error',
      })
    }
  },
  moveTask: async (id: string, state: keyof typeof States, done?: boolean) => {
    try {
      const response = await api.put<Task>(`/task/${id}`, { state, done })
      const task = response.data
      set((s) => ({
        tasks: s.tasks.map((task) =>
          task.id === id ? { ...task, state, done } : task
        ),
      }))
    } catch (error) {}
  },
})

export const useTask = create(store)
