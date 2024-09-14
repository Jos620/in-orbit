'use client'

import { useQuery } from '@tanstack/react-query'
import { EmptyGoals } from './_components/empty-goals'
import { Summary } from './_components/summary'
import { getSummary } from '~/services/get-summary'

export default function HomePage() {
  const { data: summary } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  if (summary && summary.total > 0) {
    return <Summary />
  }

  return <EmptyGoals />
}
