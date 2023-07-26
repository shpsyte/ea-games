import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Menu from './Menu'

describe('Menu', () => {
  const config = { name: 'Test Column', orderBy: 'title', isDone: false }

  it('renders menu', () => {
    const { getByTestId } = render(<Menu />)
    const menu = getByTestId('delete-all-btn')
    expect(menu).toBeInTheDocument()
  })

  it('open modal to delete', () => {
    const { container, getByTestId } = render(<Menu />)
    const btn = getByTestId('delete-all-btn')

    fireEvent.click(btn)
    // exptected to be clicked
    expect(btn).toBeCalled
  })
})
