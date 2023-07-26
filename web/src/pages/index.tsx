import { Column } from '@/components/features/home/Columns'
import SearchBar from '@/components/features/home/SearchBar'
import AppLayout from '@/components/interface/AppLayout'
import { useTask } from '@/hooks/use-task'
import { fetchState } from '@/services/fetch-state'
import { fetchAllTask, fetchTask } from '@/services/fetch-task'
import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'

export default function Home() {
  // initialize the state

  const { setTasks, states, setSate } = useTask(
    (s) => ({
      setTasks: s.setTasks,
      states: s.states.filter((a) => a.show),
      setSate: s.setStates,
    }),
    shallow
  )

  useEffect(() => {
    const states = async () => {
      const states = await fetchState()
      setSate(states)
    }
    const tasks = async () => {
      const allTask = await fetchAllTask()
      setTasks(allTask)
    }

    states().then(() => tasks())
  }, [])

  return (
    <AppLayout>
      <main className="flex flex-col overflow-x-hidden">
        <SearchBar />

        <div className="mt-9 flex flex-col gap-2 tablet:flex-row  ">
          {states.map((state) => {
            return (
              <Column
                key={state.id}
                state={state.id as keyof typeof States}
                config={state.config as any}
              />
            )
          })}
        </div>
      </main>
    </AppLayout>
  )
}
