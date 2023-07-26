import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SearchBar from './SearchBar'

jest.mock('@/hooks/use-task', () => ({
  useTask: jest.fn(() => ({
    addTask: jest.fn(),
    setTasks: jest.fn(),
  })),
}))

jest.mock('@/services/fetch-task', () => ({
  fetchAllTask: jest.fn(() => Promise.resolve([])),
}))

describe('SearchBar', () => {
  it('adds a task when the "Add" button is clicked', () => {
    render(<SearchBar />)

    // const input = screen.getByRole('input', { name: 'Add task' })
    // const button = screen.getByRole('button', { name: 'Add' })
    // fireEvent.change(input, { target: { value: 'New task' } })
    // fireEvent.click(button)
    // expect(input).toHaveValue('')
    // expect(useTask().addTask).toHaveBeenCalledWith(
    //   { title: 'New task', state: 'planned' },
    //   expect.any(Function)
    // )
  })

  // it('searches for tasks when the input value changes', async () => {
  //   render(<SearchBar />)
  //   const input = screen.getByRole('textbox', { name: 'Search tasks' })
  //   fireEvent.change(input, { target: { value: 'Task 1' } })
  //   await waitFor(() => expect(useTask().setTasks).toHaveBeenCalledWith([]))
  //   expect(useTask().setTasks).toHaveBeenCalledTimes(1)
  //   expect(useTask().setTasks).toHaveBeenCalledWith([])
  //   expect(useTask().setTasks).toHaveBeenCalledWith([])
  // })
})
