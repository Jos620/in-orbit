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
  const response = await fetch('http://localhost:3333/summary')
  const { summary } = await response.json()

  return summary
}
