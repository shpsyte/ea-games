import React from 'react'
import { Trash } from 'react-feather'
import { useTask } from '@/hooks/use-task'
import { clsx } from 'clsx'
type TaskProps = {
  task: Task
}

export default function Task({ task }: TaskProps) {
  const { title, state, id } = task
  const { deleteTask, setDragTask, markAsDone } = useTask((s) => ({
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
            'bg-gray-300': state === 'done',
          }
        )}
      >
        <div className="flex w-full items-center gap-2">
          <input
            type="checkbox"
            onChange={handleMarkAsDone}
            disabled={state === 'done'}
            checked={state === 'done'}
            className={clsx(
              'cursor-pointer rounded-md border-2 border-gray-300',
              { 'bg-gray-950': state === 'done' }
            )}
          />
          <span
            className={clsx('text-sm font-normal', {
              'line-through': state === 'done',
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
              '!bg-green-700 text-white': state === 'done',
            })}
          >
            {state}
          </span>
        </div>
      </div>
    </>
  )
}
