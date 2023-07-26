import { useTask } from '@/hooks/use-task'
import { shallow } from 'zustand/shallow'
import Task from './Task'
import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { api } from '@/lib/api'
import { fetchTask } from '@/services/fetch-task'

type ColumnsProps = {
  state: keyof typeof States
}

export function Column({ state }: ColumnsProps) {
  const { setDragTask, moveTask, draggedTask, tasks } = useTask(
    (s) => ({
      setDragTask: s.setDraggedTask,
      moveTask: s.moveTask,
      draggedTask: s.draggedTask,
      tasks: s.tasks.filter((a) => a.state === state),
    }),
    shallow
  )

  const [drop, setDrop] = useState(false)
  // const [tasks, setTasks] = useState<Task[]>([])
  // const done = state === 'done'
  // const config = {
  //   state,
  //   skip: 0,
  //   take: state === 'done' ? 10 : undefined,
  // }

  // const load = async () => {
  //   const data = await fetchTask(config)
  //   setTasks(data.tasks)
  // }

  // useEffect(() => {
  //   load()
  // }, [])

  const handleDropTask = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrop(false)
    const id = draggedTask as string
    moveTask(id, state, state === 'done')
    setDragTask()
  }

  return (
    <>
      <div
        onDragOver={(e) => {
          setDrop(true)
          e.preventDefault()
        }}
        onDragLeave={() => setDrop(false)}
        onDrop={handleDropTask}
        className={clsx(
          'flex h-[calc(100vh-220px)] w-screen scroll-m-2 flex-col gap-2 overflow-y-auto border-2 border-dashed border-transparent p-2 hover:bg-primary',
          drop && 'border-white bg-primary'
        )}
      >
        <div className="flex justify-between p-2 text-sm font-bold text-white">
          {state}
          <span>{tasks?.length}</span>
        </div>

        {tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  )
}
