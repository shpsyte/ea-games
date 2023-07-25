import React from 'react'
import { Trash } from 'react-feather'
import { useTodo } from '@/hooks/use-todo'
import { clsx } from 'clsx'
type TaskProps = {
  task: Task
}

export default function Task({ task }: TaskProps) {
  const { title, state, id } = task
  const { deleteTask, setDragTask, markAsDone } = useTodo((s) => ({
    deleteTask: s.deleteTask,
    setDragTask: s.setDraggedTask,
    markAsDone: s.markAsDone,
  }))

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  const handleMarkAsDone = () => {
    markAsDone(id)
  }

  return (
    <>
      <div
        draggable
        onDragStart={() => setDragTask(task.id)}
        className={clsx(
          'flex cursor-move flex-col items-start gap-2 rounded-lg bg-white p-2 ',
          {
            'bg-gray-300': state === 'DONE',
          }
        )}
      >
        <div className="flex w-full items-center gap-2">
          <input
            type="checkbox"
            onChange={handleMarkAsDone}
            disabled={state === 'DONE'}
            checked={state === 'DONE'}
            className={clsx(
              'cursor-pointer rounded-md border-2 border-gray-300',
              { 'bg-gray-950': state === 'DONE' }
            )}
          />
          <span
            className={clsx('text-sm font-normal', {
              'line-through': state === 'DONE',
            })}
          >
            {title}
          </span>
        </div>
        <div className="flex w-full flex-1 items-center justify-between">
          <Trash
            size={16}
            onClick={handleDeleteTask}
            className="cursor-pointer"
          />
          <span
            className={clsx('rounded-md bg-tertiary p-1 text-sm', {
              'bg-green-700 text-white': state === 'DONE',
            })}
          >
            {state}
          </span>
        </div>
      </div>
    </>
  )
}
