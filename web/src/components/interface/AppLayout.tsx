import { PropsWithChildren } from 'react'
import Head from './Head'
import Menu from './Menu'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-gray-100">
      <Head />

      <div className="w-full max-w-7xl px-4">
        <Menu />
        {children}
      </div>
    </div>
  )
}
