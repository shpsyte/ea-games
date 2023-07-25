import { useState } from 'react'

import { useTodo } from '@/hooks/use-todo'
import notify from '../Notify'
export default function Menu() {
  const deleteAllTasks = useTodo((s) => s.deleteAllTasks)
  const [confirm, setConfirm] = useState(false)

  const handleOnDelete = () => {
    // get the confirmation form checkbox
    const confirm = document.getElementById('confirm') as HTMLInputElement
    if (!confirm.checked) {
      notify({ message: 'You must confirm your action', type: 'error' })
      return
    }
    deleteAllTasks()
    setConfirm(false)
  }

  return (
    <div className="mb-8 flex w-full items-start justify-between p-2 text-white">
      <h2 className="text-2xl font-bold text-white">Marvelous v2.0</h2>
      {!confirm && (
        <button
          onClick={() => setConfirm(true)}
          className="cursor-pointer underline outline-none "
        >
          delete all tasks
        </button>
      )}
      {confirm && (
        <>
          {/* create a modal to confirm the action */}
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
              </div>

              <div className="mx-auto max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
                <div className="border-b bg-gray-100 px-4 py-3">
                  <h2 className="text-lg font-medium text-gray-900">
                    Are you sure you want to delete all tasks?
                  </h2>
                </div>

                <div className="p-4">
                  <p className="flex flex-col text-gray-700">
                    <span>
                      All tasks will be deleted and this action cannot be
                      undone. You must confirm your action.
                    </span>
                    <span className="flex  items-center gap-2">
                      <input
                        name="confirm"
                        id="confirm"
                        type="checkbox"
                        className=""
                      />
                      <label
                        htmlFor="confirm"
                        className="cursor-pointer font-bold"
                      >
                        I understand that tasks will be deleted
                      </label>
                    </span>
                  </p>
                </div>

                <div className="flex justify-end border-t bg-gray-100 px-4 py-3">
                  <button
                    onClick={handleOnDelete}
                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setConfirm(false)}
                    className="ml-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
