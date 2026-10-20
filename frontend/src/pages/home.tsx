import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '@/lib/api'

type HealthResponse = {
  status: string
}

export function HomePage() {
  const health = useQuery({
    queryKey: ['health'],
    queryFn: async (): Promise<HealthResponse> => {
      const response = await apiFetch('/api/health')
      if (!response.ok) {
        throw new Error('health request failed')
      }
      return (await response.json()) as HealthResponse
    },
  })

  return (
    <main className="font-sans">
      <h1>API health</h1>
      {health.isPending ? <p>Checking health...</p> : null}
      {health.isError ? <p>Health check failed.</p> : null}
      {health.data ? <p>{health.data.status}</p> : null}
    </main>
  )
}
