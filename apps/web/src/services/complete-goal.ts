import { env } from '~/env'

export async function completeGoal(goalId: string) {
  await fetch(`${env.NEXT_PUBLIC_API_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
