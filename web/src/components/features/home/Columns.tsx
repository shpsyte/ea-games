import { useTodo } from '@/hooks/use-todo'
import { shallow } from 'zustand/shallow'
import Task from './Task'
import { useState } from 'react'
import { clsx } from 'clsx'

type ColumnsProps = {
  state: keyof typeof States
}

export function Column({ state }: ColumnsProps) {
  const tasks = useTodo(
    (s) => s.tasks.filter((t) => t.state === state),
    shallow
  )
  const { setDragTask, moveTask, draggedTask } = useTodo((s) => ({
    setDragTask: s.setDraggedTask,
    moveTask: s.moveTask,
    draggedTask: s.draggedTask,
  }))
  const [drop, setDrop] = useState(false)

  return (
    <>
      <div
        onDragOver={(e) => {
          setDrop(true)
          e.preventDefault()
        }}
        onDragLeave={() => setDrop(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDrop(false)
          const id = draggedTask as string
          moveTask(id, state)
          setDragTask()
        }}
        className={clsx(
          'flex h-[calc(100vh-220px)] w-screen flex-col gap-2 border-2 border-dashed border-transparent hover:bg-primary',
          drop && 'border-white bg-primary'
        )}
      >
        <div className="flex justify-between p-2 text-sm font-bold text-white">
          {state}
          <span>{tasks.length}</span>
        </div>

        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  )
}
