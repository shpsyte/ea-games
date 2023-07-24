import AppLayout from '@/components/interface/AppLayout'
import { useTodo } from '@/hooks/use-todo'

export default function Home() {
  const todo = useTodo((s) => s.todos)
  return (
    <AppLayout>
      <main>
        <div>Content</div>
        <div>{JSON.stringify(todo)}</div>
      </main>
    </AppLayout>
  )
}
