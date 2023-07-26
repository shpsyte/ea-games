import { PropsWithChildren } from 'react'

type ModalProps = {
  className?: string
}

function ModalHeader({ children }: PropsWithChildren<ModalProps>) {
  return <div className="border-b bg-gray-100 px-4 py-3">{children}</div>
}

function ModalBody({ children }: PropsWithChildren<{}>) {
  return <div className="p-4">{children}</div>
}

function ModalFooter({ children }: PropsWithChildren<ModalProps>) {
  return (
    <div className="flex justify-end gap-2 border-t bg-gray-100 px-4 py-3">
      {children}
    </div>
  )
}

function ModalContainer({ children }: PropsWithChildren) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>

          <div className="mx-auto max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export const Modal = {
  Root: ModalContainer,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
}
