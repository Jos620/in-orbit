import { env } from '~/env'

interface Summary {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<Summary> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/summary`, {
    cache: 'no-cache',
  })
  const { summary } = await response.json()

  return summary
}
