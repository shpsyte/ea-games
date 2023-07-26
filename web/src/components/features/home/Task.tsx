import React from 'react'
import { Trash } from 'react-feather'
import { useTask } from '@/hooks/use-task'
import { clsx } from 'clsx'
type TaskProps = {
  task: Task
}

export default function Task({ task }: TaskProps) {
  const { title, state, id } = task
  const { deleteTask, setDragTask, markAsDone, moveTask } = useTask((s) => ({
    deleteTask: s.deleteTask,
    setDragTask: s.setDraggedTask,
    markAsDone: s.markAsDone,
    moveTask: s.moveTask,
  }))

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  const handleMarkAsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      markAsDone(id)
    } else {
      moveTask(id, 'planned', false)
    }
  }

  return (
    <>
      <div
        draggable
        onDragStart={() => setDragTask(task.id)}
        className={clsx(
          'mt-2 flex cursor-move flex-col items-start gap-2 rounded-lg bg-primary p-2 ',
          {
            'bg-gray-300': state === 'done',
          }
        )}
      >
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            onChange={handleMarkAsDone}
            checked={state === 'done'}
            className={clsx(
              'border-1 cursor-pointer border-gray-700   bg-secondary '
            )}
          />
          <span
            className={clsx('text-base font-thin text-white', {
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
            className="cursor-pointer text-white hover:text-red-500"
          />
          <span
            className={clsx(
              'rounded-none bg-secondary p-1 text-xs font-thin text-white',
              {
                '!bg-green-700 text-white': state === 'done',
              }
            )}
          >
            {id.slice(0, 8)}
          </span>
        </div>
      </div>
    </>
  )
}
