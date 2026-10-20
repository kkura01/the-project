import { afterEach, expect, it, vi } from 'vitest'
import { apiFetch } from './api'

afterEach(() => {
  vi.unstubAllGlobals()
})

it('sends credentials with the request', async () => {
  const fetchMock = vi.fn().mockResolvedValue(new Response('{}'))
  vi.stubGlobal('fetch', fetchMock)

  await apiFetch('/api/health')

  expect(fetchMock).toHaveBeenCalledWith('/api/health', {
    credentials: 'include',
  })
})
