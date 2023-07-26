import Button from '@/components/Button'
import Input from '@/components/Input'
import { useTask } from '@/hooks/use-task'
import { fetchAllTask } from '@/services/fetch-task'
import { useRef } from 'react'

let timeOutId: any = null
export default function SearchBar() {
  const { addTask, setTasks } = useTask((s) => ({
    addTask: s.addTask,
    setTasks: s.setTasks,
  }))
  const refInput = useRef<HTMLInputElement>(null)
  const refSearch = useRef<HTMLInputElement>(null)

  const onAddTask = () => {
    addTask(
      {
        title: refInput?.current?.value,
        state: 'planned',
      } as Task,
      () => {
        if (refInput.current) {
          refInput.current.value = ''
          refInput.current.focus()
        }
      }
    )
  }

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    clearTimeout(timeOutId)
    timeOutId = setTimeout(async () => {
      const tasks = await fetchAllTask(e.target.value)
      setTasks(tasks)
    }, 500)
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-4  p-2 tablet:flex-row">
        <div className="flex w-full justify-between gap-2 tablet:w-1/3">
          <Input
            ref={refInput}
            placeholder="Add a new task"
            data-testid="add-task"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onAddTask()
              }
            }}
          />
          <Button className="min-w-max" onClick={onAddTask}>
            Add
          </Button>
        </div>
        <div className="flex w-full justify-end gap-1 tablet:w-1/3">
          <Input
            ref={refSearch}
            data-search={refSearch?.current?.value}
            onChange={onSearch}
            placeholder="Find this board"
            className="w-full transition-all duration-500 ease-in-out hover:w-full tablet:data-[search='']:w-1/2 tablet:data-[search='']:hover:w-full"
          />
        </div>
      </div>
    </>
  )
}
