import { db } from '../db'
import { InsertGoal, goals } from '../db/schema'

interface CreateGoalRequest {
  params: InsertGoal
}

export async function createGoal({ params }: CreateGoalRequest) {
  const result = await db.insert(goals).values(params).returning()

  const goal = result[0]

  return {
    goal,
  }
}
