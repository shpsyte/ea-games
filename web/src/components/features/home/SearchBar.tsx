import notify from '@/components/Notify'
import { useTask } from '@/hooks/use-task'
import { useMemo, useRef, useState } from 'react'
import { v4 } from 'uuid'

export default function SearchBar() {
  const { addTask, task } = useTask((s) => ({
    addTask: s.addTask,
    task: s.tasks,
  }))
  const refInput = useRef<HTMLInputElement>(null)

  const onAddTask = () => {
    addTask({
      title: refInput?.current?.value,
      state: 'planned',
    } as Task)

    if (refInput.current) {
      refInput.current.value = ''
      refInput.current.focus()
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-4  p-2 tablet:flex-row">
        <div className="flex max-w-md flex-1 gap-2">
          <input
            className="w-full rounded-md border-2   p-2 outline-none  "
            placeholder="Add a task"
            ref={refInput}
          />
          <button
            className="w-full rounded-md bg-blue-950 p-2 text-white hover:bg-blue-900"
            onClick={onAddTask}
          >
            Add
          </button>
        </div>
        <div className="flex max-w-md flex-1 flex-col gap-2">
          <input className="w-full rounded-md p-2 " placeholder="search" />
        </div>
      </div>
    </>
  )
}
