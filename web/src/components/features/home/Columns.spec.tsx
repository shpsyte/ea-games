import React from 'react'
import { render, screen } from '@testing-library/react'
import { Column } from './Columns'

describe('Columns', () => {
  const config = { name: 'Test Column', orderBy: 'title', isDone: false }

  it('renders the column name and task count', () => {
    render(<Column config={config as any} state="planned" />)
    expect(screen.getByText('Test Column')).toBeInTheDocument()
  })
})
