import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acodar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Exercícios', desiredWeeklyFrequency: 3 },
      { title: 'Meditação', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  function getRandomTime() {
    return startOfWeek
      .add(Math.floor(Math.random() * 6), 'day')
      .add(Math.floor(Math.random() * 16) + 8, 'hour')
      .add(Math.floor(Math.random() * 60), 'minute')
      .toDate()
  }

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: getRandomTime() },
    { goalId: result[0].id, createdAt: getRandomTime() },
    { goalId: result[1].id, createdAt: getRandomTime() },
    { goalId: result[2].id, createdAt: getRandomTime() },
    { goalId: result[2].id, createdAt: getRandomTime() },
  ])
}

seed().finally(() => {
  client.end()
})
