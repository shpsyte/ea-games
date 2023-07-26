import { useTask } from '@/hooks/use-task'
import { shallow } from 'zustand/shallow'
import Task from './Task'
import { useState } from 'react'
import clsxm from '@/lib/clsx'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchTask } from '@/services/fetch-task'
type ColumnsProps = {
  state: keyof typeof States
  config: {
    name: string
    orderBy: 'title' | 'doneAt'
    isDone: boolean
  }
}

export function Column({ state, config }: ColumnsProps) {
  const { setDragTask, moveTask, draggedTask, tasks, pushTasks } = useTask(
    (s) => ({
      setDragTask: s.setDraggedTask,
      moveTask: s.moveTask,
      draggedTask: s.draggedTask,
      pushTasks: s.pushTasks,
      tasks: s.tasks
        .filter((a) => a.state === state)
        .sort((a, b) => {
          const orderBy = config.orderBy

          if (orderBy === 'doneAt') {
            const dateA = new Date(a.doneAt ?? '')
            const dateB = new Date(b.doneAt ?? '')
            return dateB.getTime() - dateA.getTime()
          }

          return a.title.localeCompare(b.title)
        }),
    }),
    shallow
  )
  const [drop, setDrop] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrop(true)
  }
  const handleDropTask = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrop(false)
    const id = draggedTask as string
    moveTask(id, state, config.isDone)
    setDragTask()
  }

  const loadMore = async () => {
    const data = await fetchTask({
      state,
      skip: tasks.length + 10,
      take: 10,
    })
    setHasMore(data.tasks.length > 0 ? true : false)
    pushTasks(data.tasks)
  }

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={() => setDrop(false)}
        onDrop={handleDropTask}
        id="list"
        className={clsxm(
          'flex max-h-[400px] flex-1 scroll-m-2 flex-col gap-2 overflow-y-auto border-2 border-dashed border-transparent bg-secondary p-2 tablet:max-h-[calc(100vh-220px)]',
          { '!border-white bg-secondary': drop }
        )}
      >
        <div className="flex justify-between p-2 text-sm font-bold text-white">
          {config.name}
          <span>{tasks?.length}</span>
        </div>
        <InfiniteScroll
          scrollableTarget="list"
          height="60vh"
          dataLength={tasks?.length}
          next={() => loadMore()}
          endMessage={
            <h4 className="text-center text-white">
              {tasks?.length ? 'No more tasks' : ''}
            </h4>
          }
          loader={hasMore ? <h4>Loading...</h4> : null}
          hasMore={tasks?.length ? hasMore : false}
        >
          {tasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  )
}
