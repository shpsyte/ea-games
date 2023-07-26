import { PropsWithChildren } from 'react'
import Head from './Head'
import Menu from './Menu'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="hidden h-screen w-screen flex-col items-center justify-start bg-primary mobile:flex">
        <Head />

        <div className="flex h-screen w-full max-w-5xl flex-col gap-0 bg-primary px-4">
          <Menu />
          {children}
        </div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center bg-primary mobile:hidden ">
        <h4 className="text-center text-white">
          Your device is not compatible with this application. Please use a
          desktop, tablet or Iphone device.
        </h4>
      </div>
    </>
  )
}
