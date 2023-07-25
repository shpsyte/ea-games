import { Column } from '@/components/features/home/Columns'
import SearchBar from '@/components/features/home/SearchBar'
import AppLayout from '@/components/interface/AppLayout'
import { useTodo } from '@/hooks/use-todo'

export default function Home() {
  const todo = useTodo((s) => s.tasks)
  return (
    <AppLayout>
      <main className="flex flex-col">
        <SearchBar />

        <div className="mt-9 flex gap-4 ">
          <Column state="PLANNED" />
          <Column state="ONGOING" />
          {/* <Column state="ONHOLD" /> */}
          <Column state="DONE" />
        </div>
      </main>
    </AppLayout>
  )
}
