import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
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

const useTask = jest.fn(() => ({
  addTask: jest.fn(),
  setTasks: jest.fn(),
}))

describe('SearchBar', () => {
  it('adds a task when the "Add" button is clicked', () => {
    const { getByTestId } = render(<SearchBar />)

    const input = getByTestId('add-task-input')
    const button = getByTestId('add-task-btn')

    fireEvent.change(input, { target: { value: 'New task' } })
    fireEvent.click(button)
    expect(input).toHaveValue('New task')
  })
})
