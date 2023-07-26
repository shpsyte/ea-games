import { StateCreator, create } from 'zustand'
import { api } from '@/lib/api'
import notify from '@/components/Notify'

type TaskStore = {
  tasks: Task[]
  states: State[]
  draggedTask: string | null | undefined
  broadcast: BroadcastChannel | null
  reload: boolean
  setReload: () => void
  setBroadcast: (channel: BroadcastChannel) => void
  setTasks: (tasks: Task[]) => void
  pushTasks: (tasks: Task[]) => void
  setStates: (states: State[]) => void
  setDraggedTask: (id?: string) => void
  addTask: (todo: Task, cb?: () => void) => void
  deleteTask: (id: string) => void
  deleteAllTasks: () => void
  moveTask: (id: string, state: keyof typeof States, done?: boolean) => void
  markAsDone: (id: string) => void
}

const store: StateCreator<TaskStore> = (set, getState) => ({
  tasks: [],
  states: [],
  draggedTask: null,
  broadcast: null,
  reload: false,
  setReload: () => set((s) => ({ reload: !s.reload })),
  setBroadcast: (channel: BroadcastChannel) => set({ broadcast: channel }),
  pushTasks: (tasks: Task[]) => set((s) => ({ tasks: [...s.tasks, ...tasks] })),
  setStates: (states: State[]) => set({ states }),
  setTasks: (tasks: Task[]) =>
    set({
      tasks,
    }),
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
    } finally {
      broadcastBoard()
    }
  },
  setDraggedTask: (id?: string) => set((s) => ({ draggedTask: id })),
  addTask: async ({ id, title, state }: Task, cb?: () => void) => {
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

      cb && cb()
    } catch (error) {
      console.log(error)
      notify({
        message: 'An error occurred while creating the task.',
        type: 'error',
      })
    } finally {
      broadcastBoard()
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
    } finally {
      broadcastBoard()
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
          task.id === id
            ? {
                ...task,
                done: true,
                state: 'done',
                doneAt: new Date().toISOString(),
              }
            : task
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
    } finally {
      broadcastBoard()
    }
  },
  moveTask: async (id: string, state: keyof typeof States, done?: boolean) => {
    try {
      await api.put<Task>(`/task/${id}`, { state, done })
      set((s) => ({
        tasks: s.tasks.map((task) =>
          task.id === id ? { ...task, state, done } : task
        ),
      }))
      notify({
        message: 'Task moved successfully',
      })
    } catch (error) {
      notify({
        message: 'An error occurred while updating the task',
        type: 'error',
      })
    } finally {
      broadcastBoard()
    }
  },
})

function broadcastBoard() {
  try {
    const { broadcast, tasks } = useTask.getState()
    broadcast?.postMessage({
      type: 'update-board',
      payload: tasks,
    })
  } catch {}
}

export const useTask = create(store)
