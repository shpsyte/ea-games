import { useState } from 'react'

import { useTask } from '@/hooks/use-task'
import notify from '../Notify'
import clsx from 'clsx'
import { Modal } from '@/components/Modal'
import Button from '@/components/Button'

export default function Menu() {
  const { deleteAllTasks, total } = useTask((s) => ({
    deleteAllTasks: s.deleteAllTasks,
    total: s.tasks.length,
  }))
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
          disabled={total === 0}
          onClick={() => setConfirm(true)}
          className={clsx('cursor-pointer underline outline-none ', {
            'cursor-default text-gray-500': total === 0,
          })}
        >
          delete all tasks
        </button>
      )}
      {confirm && (
        <>
          {/* create a modal to confirm the action */}
          <Modal.Root>
            <Modal.Header>
              <h2 className="text-lg font-medium text-gray-900">
                Are you sure you want to delete all tasks?
              </h2>
            </Modal.Header>
            <Modal.Body>
              <div className="p-4">
                <p className="flex flex-col text-gray-700">
                  <span>
                    All tasks will be deleted and this action cannot be undone.
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={handleOnDelete}
                className="bg-red-500 hover:bg-red-800"
              >
                Delete
              </Button>
              <Button onClick={() => setConfirm(false)}>Cancel</Button>
            </Modal.Footer>
          </Modal.Root>
        </>
      )}
    </div>
  )
}
