import { env } from '~/env'

interface PendingGoal {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

export async function getPendingGoals(): Promise<PendingGoal[]> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/pending-goals`, {
    cache: 'no-store',
  })
  const { pendingGoals } = await response.json()

  return pendingGoals
}
