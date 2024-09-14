interface PendingGoal {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

export async function getPendingGoals(): Promise<PendingGoal[]> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const { pendingGoals } = await response.json()

  return pendingGoals
}
