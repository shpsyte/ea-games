import { fetchState } from './fetch-state'
import { api } from '@/lib/api'

jest.mock('@/lib/api', () => ({
  api: {
    get: jest.fn(),
  },
}))

describe('fetchState', () => {
  it('fetches the state from the API', async () => {
    const data = [
      { id: 1, name: 'State 1' },
      { id: 2, name: 'State 2' },
    ]
    // @ts-ignore
    api.get.mockResolvedValueOnce({ data })
    const result = await fetchState()
    expect(api.get).toHaveBeenCalledWith('/states')
    expect(result).toEqual(data)
  })

  it('throws an error if the API returns an error', async () => {
    const error = new Error('Internal Server Error')
    // @ts-ignore
    api.get.mockRejectedValueOnce(error)
    await expect(fetchState()).rejects.toThrow(error)
  })
})
