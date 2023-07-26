import { Column } from '@/components/features/home/Columns'
import SearchBar from '@/components/features/home/SearchBar'
import AppLayout from '@/components/interface/AppLayout'
import { useTask } from '@/hooks/use-task'
import { api } from '@/lib/api'
import { fetchAllTask, fetchTask } from '@/services/fetch-task'
import { use, useCallback, useEffect } from 'react'

export default function Home() {
  const { setTasks } = useTask((s) => ({
    setTasks: s.setTasks,
  }))
  const load = useCallback(async () => {
    const allTask = await fetchAllTask()
    setTasks(allTask)
  }, [])

  useEffect(() => {
    load()
  }, [])

  return (
    <AppLayout>
      <main className="flex flex-col">
        <SearchBar />

        <div className="mt-9 flex gap-4 ">
          <Column state="planned" />
          <Column state="ongoing" />
          {/* <Column state="ONHOLD" /> */}
          <Column state="done" />
        </div>
      </main>
    </AppLayout>
  )
}
