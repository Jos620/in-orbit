import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { EmptyGoals } from './_components/empty-goals'
import { Summary } from './_components/summary'
import { getSummary } from '~/services/get-summary'
import { getQueryClient } from '~/context/react-query/client'
import { getPendingGoals } from '~/services/get-pending-goals'

export default async function HomePage() {
  const queryClient = getQueryClient()

  const pendingGoals = await getPendingGoals()

  await queryClient.prefetchQuery({
    queryKey: ['pending-goals'],
    initialData: pendingGoals,
  })

  if (pendingGoals.length < 1) {
    return <EmptyGoals />
  }

  await queryClient.prefetchQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Summary />
    </HydrationBoundary>
  )
}
